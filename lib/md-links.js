#!/usr/bin/env node


const Marked = require('marked');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

let fileName = "README.md";

const mdLinks = (fileName, options) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;

    var text = data.toString();
    var links = getLinks(fileName, text);
    
    validateLink(links).then((values) => {
      console.log(links);

    })

  });
}

mdLinks("readme.md", null);

const getLinks = (fileName, text) => {
  var result = [];

  var lines = text.split('\n');

  for (var i = 0; i < lines.length; i++) {
    markdownLinkExtractor(lines[i], fileName, i).forEach(element => {
      result.push(element);
    });
  }
  return result;
}

const markdownLinkExtractor = (markdown, fileName, line) => {
  const links = [];
  const renderer = new Marked.Renderer();
  const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

  Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

  renderer.link = function (href, title, text) {
    links.push({
      href: href,
      text: text,
      path: fileName,
      line: line
    });
  };
  renderer.image = function (href, title, text) {
    // Remove image size at the end, e.g. ' =20%x50'
    href = href.replace(/ =\d*%?x\d*%?$/, '');
    links.push({
      href: href,
      text: text,
      path: fileName,
      line: line
    });
  };
  Marked(markdown, { renderer: renderer });

  return links;
};
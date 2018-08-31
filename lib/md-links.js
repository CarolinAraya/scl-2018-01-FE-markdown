#!/usr/bin/env node


const Marked = require('marked');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

let fileName = "README.doc";

//const [, , ...args] = process.argv;

const mdLinks = (fileName, options) => {

  if (path.extname(fileName) === '.md') {

    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;

      var text = data.toString();
      var links = getLinks(fileName, text);

      validateLinks(links).then((values) => {
        console.log(values);

      });

    });
  } else {
    console.log("Debe ser un .md")
  }

}

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

const validateLinks = (links) => {
  return new Promise((resolve, reject) => {
    let promises = [];

    links.forEach((link) => {

      promises.push(validateLink(link));
    });
    Promise.all(promises).then((values) => {
      resolve(values);
    });
  });
};

const validateLink = (link) => {
  return fetch(link.href)
    .then(result => {
      link.status = result.status;
      link.success = result.statusText;

      return link;
    }).catch((error) => {
      link.status = 400;
      link.success = 'bad request de la wea';

      return link;
    });
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
#!/usr/bin/env node


const Marked = require('marked');
const fs = require('fs');
const path = require('path');

let fileName = "README.md";

const mdLinks = (fileName, oprtions) => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
}






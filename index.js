#!/usr/bin/env node


const Marked = require('marked');
const fs = require('fs');
const path = require('path');

let pathMark = "README.md";

fs.readFile(pathMark, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });




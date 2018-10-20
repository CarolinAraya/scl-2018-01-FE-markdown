#!/usr/bin/env node
'use strict';
let mdLinks = require('./lib/md-links');

const [, , ...args] = process.argv;
let fileName = args[0];
let validate = args[1];

if (require.main === module) {
    mdLinks(fileName, validate).then((result) => {

        if (result) {
            if (validate) {
                result.forEach((result) => {
                    console.log(`${result.path} Linea:${result.line}, ${result.href} texto: ${result.text} ${result.success}, ${result.status}`);
                })
            }
            else {
                result.forEach((result) => {
                    console.log(`${result.path} Linea:${result.line}, ${result.href} texto: ${result.text}`);
                })
            }
        }
    })
}

module.exports = require('./lib/md-links');

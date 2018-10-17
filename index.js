#!/usr/bin/env node
'use strict';
let mdLinks = require('./lib/md-links');

if (require.main === module) {
    const [, , ...args] = process.argv;
    let fileName = args[0];
    let validate = args[1];

    mdLinks(fileName, validate).then((result) => {
        
        if (result){
            console.log("pez koi")
        }
        //return result;
    })
}

module.exports = require('./lib/md-links');

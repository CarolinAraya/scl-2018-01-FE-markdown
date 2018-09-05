#!/usr/bin/env node
'use strict';

const mdlinks = require('./lib/md-links');

if (require.main === module) {

    const [, , ...args] = process.argv;

    let fileName = args[0];

    let validate = args[1]; //Soy un programa en la terminal
} else {

    mdLinks(fileName, validate);
    //Me están ejecutando como módulo, debería exportar la función solamente
}

module.exports = require('./lib/md-links');








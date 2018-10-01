#!/usr/bin/env node
'use strict';

module.exports = require('./lib/md-links');

const [, , ...args] = process.argv;

let fileName = args[0];

let validate = args[1];

const mdlinks = require('./lib/md-links').mdLinks(fileName, validate);

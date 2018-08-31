#!/usr/bin/env node

//const mdLinks = require('./lib/md-links').mdLinks;


  const [, , ...args] = process.argv;

  let fileName = args[0];

/*   let options = {
    validate = args[1].includes('--validate'),
  }; */

 // options.validate = args[1];


 const mdlinks = require('./lib/md-links').mdLinks(fileName, null);








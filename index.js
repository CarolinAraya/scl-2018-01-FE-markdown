#!/usr/bin/env node

const mdLinks = require('./lib/md-links').mdLinks;

if (require.main === module) {
  const [, , ...args] = process.argv;

  let fileName = args[0];

  let options = {
    validate = args[1].includes('--validate'),
  };

 // options.validate = args[1];


  mdlinks(fileName, option);

}






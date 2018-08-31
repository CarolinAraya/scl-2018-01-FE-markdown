#!/usr/bin/env node

const mdLinks = require('./lib/md-links').mdLinks;

if (require.main === module) {
  const [, , ...args] = process.argv;
  
  let options = {
	  validate = args.includes('--validate'),
  };

 
}





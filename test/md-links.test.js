const validateFile = require('../lib/md-links').validateFile;



test('validar que sea un archivo .md', () => {

  expect(validateFile("archivo.md")).toBeTruthy();
});
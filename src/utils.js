import * as path from 'node:path';
import * as fs from 'node:fs';
import parsers from './parsers.js';

const getFileExtension = (filepath) => path.extname(filepath).slice(1);

const createFileInfo = (file) => {
  const extension = getFileExtension(file);
  const data = parsers(fs.readFileSync(file, 'utf-8'), extension);

  return { data, extension };
};

export {
  getFileExtension, createFileInfo,
};

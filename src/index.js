import * as path from 'node:path';
import * as fs from 'node:fs';
import parsers from './parsers.js';
import genDiff from './genDiff.js';

const getFileExtension = (filepath) => path.extname(filepath).slice(1);

const createFileInfo = (file) => {
  const extension = getFileExtension(file);
  const data = parsers(fs.readFileSync(file, 'utf-8'), extension);

  return { data, extension };
};

const processFilepaths = (filepath1, filepath2, format) => {
  const filepaths = [filepath1, filepath2];

  const fileDataArray = filepaths.map((filepath) => {
    const resolvedPath = path.resolve(process.cwd(), filepath);

    if (!fs.existsSync(resolvedPath)) {
      console.log(`${resolvedPath} does not exist.`);
      return false;
    }
    return createFileInfo(resolvedPath).data;
  });

  return genDiff(fileDataArray[0], fileDataArray[1], format);
};

export {
  getFileExtension, createFileInfo, processFilepaths,
};

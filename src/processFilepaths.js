import * as path from 'node:path';
import * as fs from 'node:fs';
import genDiff from './genDiff.js';
import { createFileInfo } from './utils.js';

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

export default processFilepaths;

import * as path from 'node:path';
import * as fs from 'node:fs';
import _ from 'lodash';
import parseData from './parseData.js';

const getFileExtension = (filepath) => path.extname(filepath).slice(1);

const createFileInfo = (file) => {
  const extension = getFileExtension(file);
  const data = parseData(fs.readFileSync(file, 'utf-8'), extension);

  return { data, extension };
};

const genDiff = (data1, data2) => {
  // объединяем ключи в массив и сортируем
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();
  const diff = keys.map((key) => {
    // если ключа нет в первом файле
    if (!_.has(data1, key)) {
      return `  + ${key}: ${(data2[key])}`;
      // если ключа нет во втором файле
    } if (!_.has(data2, key)) {
      return `  - ${key}: ${(data1[key])}`;
      // если ключи равны
    } if (_.isEqual(data1[key], data2[key])) {
      return `  ${key}: ${(data1[key])}`;
    }
    // если ключи есть, но различаются
    return [
      `  - ${key}: ${(data1[key])}`,
      `  + ${key}: ${(data2[key])}`,
    ];
  });

  return `{\n${diff.flat().join('\n')}\n}`;
};

export {
  getFileExtension, createFileInfo, genDiff,
};

/* eslint no-underscore-dangle: 0 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
import { processFilepaths } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const expectedOutput = readFile('result.txt');

test('gendiff json', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  expect(processFilepaths(file1, file2)).toEqual(expectedOutput);
});

test('gendiff yaml', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yaml');
  expect(processFilepaths(file1, file2)).toEqual(expectedOutput);
});

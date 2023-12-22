/* eslint no-underscore-dangle: 0 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
import { processFilepaths } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

describe('gendiff stylish', () => {
  const expectedOutput = readFile('stylish.txt');
  test('json', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');
    expect(processFilepaths(file1, file2, 'stylish')).toEqual(expectedOutput);
  });

  test('yaml', () => {
    const file1 = getFixturePath('file1.yml');
    const file2 = getFixturePath('file2.yaml');
    expect(processFilepaths(file1, file2, 'stylish')).toEqual(expectedOutput);
  });
});

describe('gendiff plain', () => {
  const expectedOutput = readFile('plain.txt');
  test('json', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');
    expect(processFilepaths(file1, file2, 'plain')).toEqual(expectedOutput);
  });

  test('yaml', () => {
    const file1 = getFixturePath('file1.yml');
    const file2 = getFixturePath('file2.yaml');
    expect(processFilepaths(file1, file2, 'plain')).toEqual(expectedOutput);
  });
});

#!/usr/bin/env node
import { Command } from 'commander';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { FileInfo } from '../src/utils.js';

const gendiff = new Command();

gendiff
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const filepaths = [filepath1, filepath2];

    filepaths.forEach((filepath) => {
      const resolvedPath = path.resolve(process.cwd(), filepath);
      if (!fs.existsSync(resolvedPath)) {
        console.log(`${resolvedPath} не существует.`);
      } else {
        const fileInfo = new FileInfo(resolvedPath);
        console.log(fileInfo);
      }
    });
  });

gendiff.parse();

export default gendiff;

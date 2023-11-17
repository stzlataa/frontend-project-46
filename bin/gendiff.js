#!/usr/bin/env node

import { Command } from 'commander';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { parseData } from '../src/parseData.js';

const gendiff = new Command();

gendiff
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const paths = [filepath1, filepath2];
    const currentDirectory = process.cwd();
    let resolvedPaths = [];

    paths.forEach((filepath) => {
      resolvedPaths = [...resolvedPaths, path.resolve(currentDirectory, filepath)];
    });

    resolvedPaths.forEach((resolvedPath) => {
      if (!fs.existsSync(resolvedPath)) {
        console.log(`${resolvedPath} не существует.`);
      } else {
        console.log(parseData(resolvedPath));
	  }
    });
  });

gendiff.parse();

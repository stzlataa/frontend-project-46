#!/usr/bin/env node
import { Command } from 'commander';
import processFilepaths from '../src/processFilepaths.js';

const gendiff = new Command();

gendiff
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const { format } = options;
    console.log(processFilepaths(filepath1, filepath2, format));
  });

gendiff.parse();

#!/usr/bin/env node

import { Command } from 'commander';

const gendiff = new Command();

gendiff.name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((options) => {
    console.log(options.separator);
  });

gendiff.parse();

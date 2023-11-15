#!/usr/bin/env node

import { Command } from 'commander';

const gendiff = new Command();

gendiff.name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .action((options) => {
    console.log(options.separator);
  });

gendiff.parse();

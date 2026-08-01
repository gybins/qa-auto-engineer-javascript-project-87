#!/usr/bin/env node

import genDiff from "../src/index.js";
import { Command } from "commander";

const programm = new Command();

programm 
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format <type>', 'output format')
    .action((filepath1, filepath2, option) => {
        console.log(genDiff(filepath1, filepath2, option))
    })
    
programm.parse()
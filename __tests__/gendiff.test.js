import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)

test('check diff between json', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    const expected = fs
        .readFileSync(getFixturePath('expected.txt'), 'utf-8')
        .trim()

    const expectedPlain = fs
        .readFileSync(getFixturePath('plain.txt'), 'utf-8')
        .trim()

    const expectedJson = fs
        .readFileSync(getFixturePath('json.txt'), 'utf-8')
        .trim()



  expect(genDiff(filepath1, filepath2)).toBe(expected);
  expect(genDiff(filepath1, filepath2, 'plain')).toBe(expectedPlain);
  expect(genDiff(filepath1, filepath2, 'json')).toBe(expectedJson);
})
test('check diff between yml', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');


    const expected = fs
        .readFileSync(getFixturePath('expected.txt'), 'utf-8')
        .trim()

        
    const expectedPlain = fs
        .readFileSync(getFixturePath('plain.txt'), 'utf-8')
        .trim()

    const expectedJson = fs
        .readFileSync(getFixturePath('json.txt'), 'utf-8')
        .trim()
        


  expect(genDiff(filepath1, filepath2)).toBe(expected);
  expect(genDiff(filepath1, filepath2, 'plain')).toBe(expectedPlain);
  expect(genDiff(filepath1, filepath2, 'json')).toBe(expectedJson);
})
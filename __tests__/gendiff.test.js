import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)

test('check diff between files', () => {
    const filepath1 = getFixturePath('file1.json')
    const filepath2 = getFixturePath('file2.json')

    const expected = fs
        .readFileSync(getFixturePath('expected.txt'), 'utf-8')
        .trim()

const result = genDiff(filepath1, filepath2);

console.log(JSON.stringify(expected));
console.log(JSON.stringify(result));

expect(result).toBe(expected)
})
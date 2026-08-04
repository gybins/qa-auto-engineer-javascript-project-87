import path from 'node:path'
import fs from 'node:fs'
import * as yaml from 'js-yaml'

const parse = (filepath) => {
    const fileContent = fs.readFileSync(filepath, 'utf-8')

    const extension = path.extname(filepath)

    if(extension === '.json') {
    return JSON.parse(fileContent)
} else if (extension === '.yml' || extension === '.yaml' ) {
    return yaml.load(fileContent)
}
}
export default parse
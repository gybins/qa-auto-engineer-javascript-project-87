import path from 'node:path'
import fs from 'node:fs'

const parse = (filepath) => {
    const fileContent = fs.readFileSync(filepath, 'utf-8')

    const extension = path.extname(filepath)

    if(extension === '.json') {
    return JSON.parse(fileContent)
} 
}
export default parse
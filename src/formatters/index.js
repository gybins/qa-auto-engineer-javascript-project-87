import formatStylish from './stylish.js'
import formatPlain from './plain.js'
import formatJson from './json.js'

const format = (result, format) => {
    if (format === 'stylish') {
        return formatStylish(result)
    } else if (format === 'plain') {
        return formatPlain(result)
    } else if (format === 'json') {
        return formatJson(result)
    }
}
export default format
import formatStylish from './stylish.js'
import formatPlain from './plain.js'

const format = (result, format) => {
    if (format === 'stylish') {
        return formatStylish(result)
    } else if (format === 'plain') {
        return formatPlain(result)
    }
}
export default format
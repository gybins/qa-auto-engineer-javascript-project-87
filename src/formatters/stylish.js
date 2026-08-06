const formatStylish = (diff) => {

    const lines = []

    for (const item of diff) {
        if (item.type === 'removed')  {
            lines.push(` - ${item.key}: ${item.value}`)
    }
        if (item.type === 'added') {
            lines.push(` + ${item.key}: ${item.value}`)
        }
        if (item.type === 'changed') {
            lines.push(` - ${item.key}: ${item.oldValue}`)
            lines.push(` + ${item.key}: ${item.newValue}`)
        }
        if (item.type === 'unchanged') {
            lines.push(` ${item.key}: ${item.value}`)
        }
    }

    const result = lines.join('\n')
    return `{
${result}
}`
}

export default formatStylish
const formatPlain = (result) => {
    const lines = []

    for (const item of result) {
        if (item.type === 'removed')  {
            lines.push(`Property '${item.key}' was removed`)
        }
        if (item.type === 'added') {
            lines.push(`Property '${item.key}' was added with value: ${item.value}`)
        }
        if (item.type === 'changed') {
            lines.push(`Property '${item.key}' was updated. From ${item.oldValue} to ${item.newValue}`)
        }
   
}
    const resultPlain = lines.join('\n')
    return resultPlain
}

export default formatPlain
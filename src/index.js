
    import parse from './parsers/parse.js'
    import format from './formatters/index.js'

    const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
        const data1 = parse(filepath1)
        const data2 = parse(filepath2)
        const keys1 = Object.keys(data1)
        const keys2 = Object.keys(data2)

        const uniqueKeys = [...new Set([...keys1, ...keys2])]

        uniqueKeys.sort()


    const result = []

        for(const key of uniqueKeys) {
            const hasKey1 = Object.hasOwn(data1, key)
            const hasKey2 = Object.hasOwn(data2, key)
            
            const value1 = data1[key]
            const value2 = data2[key]

            if(hasKey1 && !hasKey2) {
                result.push({key,
                            type: 'removed',
                            value: value1})
                }   
            
            if(!hasKey1 && hasKey2) {
                result.push({key,
                            type: 'added',
                            value: value2
                            
            })
            } 

            if(hasKey1 && hasKey2 && value1 !== value2) {

                result.push({key,
                            type: 'changed',
                            oldValue: value1,
                            newValue: value2})
            } 

            if(hasKey1 && hasKey2 && value1 === value2) {

                result.push({key,
                            type: 'unchanged',
                            value: value2,})
            } 
        }
            return format(result, formatName)

    }



    export default genDiff
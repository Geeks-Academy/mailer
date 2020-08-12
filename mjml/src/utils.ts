
const regexpForVariable = new RegExp(/\(([^)]+)\)/, 'g')

const preprocessMatches = (matches: Array<String>): Array<String> => {
    return matches
        .filter(el => el.includes('$$'))
        .map((el) => 
            el.replace('$$', '').replace('(', '').replace(')', ''))
}

export {
    regexpForVariable, preprocessMatches
}
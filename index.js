function findMatching(driversArray, name){
    return driversArray.filter( element => {
        return element.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(driversArray, firstPartOfName){
    return driversArray.filter( element => {
        const truncatedStringLength = firstPartOfName.length
        const truncatedName = element.slice(0, truncatedStringLength - 1)
        console.log(truncatedName)
    })
}
function findMatching(driversArray, name){
    return driversArray.filter( element => element.toLowerCase() === name.toLowerCase() )
}

// function fuzzyMatch(driversArray, firstPartOfName){
//     return driversArray.filter( element => {
//         const truncatedStringLength = firstPartOfName.length
//         const truncatedName = element.slice(0, truncatedStringLength)
//         return truncatedName === firstPartOfName
//     })
// }

function fuzzyMatch(driversArray, firstPartOfName){
    return driversArray.filter( element => element.slice(0, firstPartOfName.length) === firstPartOfName )
}

function matchName(driversArray, nameString){
    return driversArray.filter( driverObj => driverObj.name === nameString )
}
const findUniqeNumber = (arr) => {
    const uniqeNumber = arr.reduce((acc, val) => {
        console.log("🚀 ~ findUniqeNumber ~ val:", val)
        console.log("🚀 ~ findUniqeNumber ~ acc:", acc)
        const isExist = acc?.some(item => item === val)

        if(isExist){
            acc?.pop(val)
        }else{
            acc?.push(val)
        }
        return acc
    }, []);
    return uniqeNumber
}


console.log(findUniqeNumber([1,1,2,2,5,8]))


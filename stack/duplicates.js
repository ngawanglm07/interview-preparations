let arr = [1,2,3,4,5,6,7,1,1,2,2,3,2,3,2]


let duplicates = arr.filter((ele, index , arr) => arr.indexOf(ele) !== index)
console.log(duplicates);



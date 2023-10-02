function maxMin(k, arr) {
    if (k > arr.length) {
        return 0; 
    }
    let ar =  arr.sort((a,b)=> a-b);
    let kArr = []
    for(let i = 0 ; i < k ; i ++){
        kArr.push(ar[i]);
    }
    let min = Math.min(...kArr);
    let max = Math.max(...kArr);
    
    let res = max - min;
    return res;

}
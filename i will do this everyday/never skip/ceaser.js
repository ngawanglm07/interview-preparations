// Online Javascript Editor for free
function cesar(s,k){
   
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let charactersArr = characters.split('');
    let result = []
    let input = s.split('');
    let counter = 0;

    
    for(let i = 0 ; i<input.length ; i++){
    for(let j = 0 ; j < charactersArr.length ; j++){
        if(input[i] === charactersArr[j]){
            result.push(charactersArr[j+k]);
        }
    }
    }
    
    console.log(result)
}

cesar('back' , 2)
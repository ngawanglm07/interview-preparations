// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
function cesar(s,k){
   
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let charactersArr = characters.split('');
    let result = []
    let input = s.split('');
    let counter = 0;

    
    for(let i = 0 ; i<input.length ; i++){
        let char = input[i]
        if(characters.includes(char)){
        for(let j = 0 ; j < charactersArr.length ; j++){
        if(input[i] === charactersArr[j]){
            result.push(charactersArr[j+k]);
        }
    }
        } else {
            result.push(char)
        }

    }
    
    console.log(result.join(''))
}

cesar('-ack-k' , 1);
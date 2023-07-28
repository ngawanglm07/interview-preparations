function palindrome(name){
let lowerCase = name.toLowerCase();
let splittedWord = lowerCase.split('');
let lengthh = splittedWord.length - 1;


for(let i = 0 ; i < splittedWord.length ; i++){
    if(splittedWord[i] !== splittedWord[lengthh  - i]){
       return 'not a palindrome'
    } 

}
return 'palindrome' 
}


palindrome('anna')
const input = document.getElementById('something');
const output = document.getElementById('output');


input.addEventListener('input', function() {
    
 let inputValue = input.value;

if(!inputValue ){
    output.textContent = 'enter a value'
} else {
    if(inputValue%2 === 0){
        output.textContent = `the number ${inputValue} is even`;
    } else {
        output.textContent = `the number ${inputValue} is odd`;
    }
}
})
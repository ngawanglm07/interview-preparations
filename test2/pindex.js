const input = document.getElementById('something');
const output = document.getElementById('output');


input.addEventListener('input' , function(){
    let inputVal = input.value;

    if(!inputVal){
       output.textContent = "enter a value"
    }  else {
        if(inputVal % 2 === 0){
            output.textContent = ` the number ${inputVal} is even`
        } else {
            output.textContent = `the number ${inputVal} is odd`
        }
    }

   
})
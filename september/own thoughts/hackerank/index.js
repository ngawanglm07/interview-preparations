document.getElementById('input').addEventListener('input' , function(){
    let inputVal = document.getElementById('input').value ;
    let output = document.getElementById('output');

  if(!inputVal){
    alert(" you cannot leave the feild empty  ")
  } else {
      let splittedValue = inputVal.split("");
      let result = [];
      for(let i = 0 ; i < splittedValue.length ; i++){
        if(splittedValue.indexOf(splittedValue[i]) % 2 === 0){
            continue;
        } else {
            result.push(splittedValue[i]);
        }
       
      }
      output.textContent = result.join('');
  }
   
})
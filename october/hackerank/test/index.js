const input = document.getElementById('input');
const output = document.getElementById('output');
const button = document.getElementById('butt')

button.addEventListener('click' , function() {
    inputVal = input.value;
    output.textContent = inputVal;
   if(inputVal !== ''){
   getUser(inputVal)
   input.value = '';
   } else {
    alert('write something')
   }
})

async function getUser(username){
    const url = `https://jsonmock.hackerrank.com/api/article_users?username=${username}`;
    try{
    const response = await fetch(url);
    const data = await response.json();
    const userId =  await data.data[0].id;
    if(userId){
        console.log(userId);
        const newUrl = `https://jsonmock.hackerrank.com/api/transactions?userId=${userId}`;
        fetch(newUrl)
        .then((response) => response.json())
        .then(data =>{
            console.log(data);
            console.log(data.total)
            console.log(data.data)
            console.log(data.data[0]);
            console.log(data.data[0].amount)
        
        })
        .catch(err =>{
          console.log(err)
        })
    } 
    
    } catch(err){
        console.log(err);
    }

}












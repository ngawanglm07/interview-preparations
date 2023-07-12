async function getNum(username) {
    // write your code here
    const url = `https://jsonmock.hackerrank.com/api/article_users?username=${username}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var userId = data.page;
         console.log(userId);
    }).catch(error =>{
        console.log(error);
    });
    
  
let gtUrl = `https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`;
    
    fetch(gtUrl)
    .then(response => response.json())
    .then(item => {
        const total =  item.total;
    }).catch(error =>{
        console.log(error);
    });
    
   
   if(total){
       return total;
   } else {
       return 'Username Not found'
   }
   
   

}

getNum()
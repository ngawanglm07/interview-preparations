function winner(n){
    let win = false ;
    let res = -Infinity;
    let pow = 1;
    let check = []
//return sophia or maddy ;
// sophia always start first 
// with the number 100 given substract it by nearest pow of 2;
// 100 - 64 = 36; flag changes to true;
// 36 - 32 = 4 ; flag changes to false;
// 4 is a pow of 2 so 4/2 = 2 ; flag changes to true
// 2 is a pow of 2 so 2/2 = 1 ; flag changes to false 
//  winner is sophia ;
//  let name = win ? sophia : maddy ;
    while( res < n) {
         res = pow * 2;
         pow = res
         check.push(res)
         win = !win
    }
    console.log(check)
    pass = n - check[check.length - 2]
 if(res === 1){
     if(win === false){
         console.log('sophia')
     } else {
         console.log('maddy')
     }
 }
}


 winner(4);
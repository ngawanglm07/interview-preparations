function fizzbuzz(num){


    for(let i = 0 ; i <= num ; i ++){
        if(i % 3 === 0){
            console.log('fizz')
        } else if(i % 5 === 0){
            console.log('buzz')
        } else {
            console.log(i)
        }
    }

    return;
}


fizzbuzz(99);
document.getElementById('findButton').addEventListener('click', function(){
    let location = document.getElementById('input').value;
    if(location.trim() !== ""){
        getWeatherData(location);
    } else {
        alert('enter a valid area');
    }
});




function getWeatherData(location) {

const apiKey = ""
const url= ""

fetch(url)
.then((response) => response.json())
.then((data) => {

}).catch((error)=>{
    console.log('error:' , error);
    alert('an error occured')
})

}


















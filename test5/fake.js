document.getElementById('getWeatherBtn').addEventListener('click' , function(){
    const inputVal = document.getElementById('locationInput').value;
    if(inputVal.trim() !== ''){
        getWeatherData(inputVal);
    } else {
        alert('enter a location');
    }
})



function getWeatherData(inputVal){
    alert('done')

}

  let wallpaper = document.getElementById('input').value;
  let output = document.getElementById('output');
  
  document.getElementById('getWallpaper').addEventListener('click',function(){
    findWallpaper(wallpaper);
  })


function findWallpaper(wallpaper){

const apiUrl = `https://premium-anime-mobile-wallpapers-illustrations.p.rapidapi.com/rapidHandler/boy?page=1&sensitivity=0`;
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

const requestUrl = corsProxyUrl + apiUrl;

const options = {
  method: 'GET',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-RapidAPI-Key': 'bda263a3d9mshdff335b0c0a9e45p12063djsn11178e48a147',
    'X-RapidAPI-Host': 'premium-anime-mobile-wallpapers-illustrations.p.rapidapi.com'
  }
};
fetch(requestUrl, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    output.innerHTML = '';

      if (data.length > 0) {
        // Display the first image in the response data
        const imageUrl = data[0].arturl;
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        output.appendChild(imageElement);
      } else {
        output.textContent = 'No wallpapers found.';
      }
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please check the console for details.');
  });

  }

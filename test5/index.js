  // Get the location input and attach event listener to the button
  document.getElementById('getWeatherBtn').addEventListener('click', function () {
    const location = document.getElementById('locationInput').value;
    if (location.trim() !== '') {
      getWeatherData(location);
    } else {
      alert('Please enter a location.');
    }
  });

// Function to fetch weather data from an API
function getWeatherData(location) {
    const apiKey = '6673140855724724b6d65212232606'; // Replace with your actual API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  
    // Make an HTTP request
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Extract the required weather information
        const locationName = data.location.name;
        const locationCountry = data.location.country;
        const temperature = data.current.temp_c;
        const description = data.current.condition.text;
  
        // Update the weatherData div with the retrieved information
        const weatherDataElement = document.getElementById('weatherData');
        weatherDataElement.innerHTML = `
          <h2>${locationName}</h2>
          <p>Temperature: ${temperature}°C</p>
          <p>Description: ${description}</p>
          <p>${locationCountry}</p>
        `;
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('An error occurred. Please try again.');
      });
  }

  

  

  
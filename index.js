const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd4aec97e27msh46bcb9008e52dfap1036d0jsnc656db8e966c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    },
};

const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const temp2 = document.getElementById('temp2');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const humidity2 = document.getElementById('humidity2');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_speed = document.getElementById('wind_speed');
const wind_speed2 = document.getElementById('wind_speed2');
const wind_degrees = document.getElementById('wind_degrees');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((response) => {
            console.log(response);
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch((err) => {
            console.error('Error fetching weather data:', err);
            // Handle the error appropriately (e.g., show an error message to the user)
        });
};

const submit = document.getElementById('submit');
const cityInput = document.getElementById('city');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const cityValue = cityInput.value.trim();
    if (cityValue !== '') {
        getWeather(cityValue);
    } else {
        alert('Please enter a city name.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to the "Save Location" button
    document.getElementById('saveLocation').addEventListener('click', function () {
        // Get the relevant data from the page
        var cityName = document.getElementById('cityName').textContent;
        var temperature = document.getElementById('temp').textContent;
        var humidity = document.getElementById('humidity').textContent;
        var windSpeed = document.getElementById('wind_speed').textContent;

        // Example: Save the data to local storage
        var savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || [];
        var locationData = {
            cityName: cityName,
            temperature: temperature,
            humidity: humidity,
            windSpeed: windSpeed,
        };
        savedLocations.push(locationData);
        localStorage.setItem('savedLocations', JSON.stringify(savedLocations));

        // You can modify this part to save the data wherever you need
        alert('Location saved successfully!');
    });
});

// Initial weather data for Kolkata
getWeather('Kolkata');

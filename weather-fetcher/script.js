const button = document.getElementById('getWeatherBtn');
const output = document.getElementById('output');



button.addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if(!city) {
        output.innerText = 'Please enter a city name.';
        return;
    }

    getWeatherWithPromises(city);
});


//Using promises (First approach);

function getWeatherWithPromises(city) {
  const apiKey = WEATHER_API_KEY;
  console.log(apiKey)
}
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

async function getWeatherWithPromises(city) {
  const apiKey = API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  

  try {
     const res = await fetch (url);
     if(!res.ok) throw new Error('City not found');

     const data = await res.json();
     output.innerText = `Temperature in ${city}: ${data.current.temp_c}°C`
  } catch (err) {
    output.innerText = `Error: ${err.message}`;
  }
}
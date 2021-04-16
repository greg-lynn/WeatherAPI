async function handleWeatherRequest(event) {
  event.preventDefault();
  const city = document.querySelector('input[name="city"]').value;
  const urlString = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=870b1b10b58578f725b70b13aff6c357";
  const response = await fetch(urlString);
  const data = await response.json();
  const readableTemp = (data.main.temp - 273.15) * 9/5 + 32;
  document.querySelector('#weatherResult').innerText = "The weather in " + city + " is currently " + readableTemp;
}

document.querySelector('#searchForm').addEventListener('submit', handleWeatherRequest);
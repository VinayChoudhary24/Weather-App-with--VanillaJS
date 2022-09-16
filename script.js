/**
 * Weather App
 * getWeatherData() to return json response Promise
 * searchCity() to get user input and get data using getWeatherData()
 * showWeatherData() to set the data in the the html file from response
 */

/* give Global Access to DIV ID's we need 👇
"temp"
"min-temp"
"max-temp"
*/
const city_name = document.getElementById("city_name")
const weather_type = document.getElementById("weather_type")
const temp = document.getElementById('temp')
const min_temp = document.getElementById("min_temp")
const max_temp = document.getElementById('max_temp')

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

// Alternate API_KEY
// let API_KEY = "fad6414380mshce25736703afaeap1acdbajsnae0b94791d62";

/**
 * Retrieve weather data from openweathermap
 * Use fetch()
 * URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  //Use template literals to create a url with input and an API key
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = async () => {
    // Grab the City ID
const city = document.getElementById('city-input').value;
// Pass ShowDATA here, thhis function has to wait for the getWeatherData()
getWeatherData(city)
.then((res)=>{
  showWeatherData(res);
}).catch((error)=>{
  console.log(error);
})
}

/**
 * Show the weather data in HTML
 * make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
    // Console.log to Check
    console.log(weatherData.main)


// change the Values of DOM elements Here, to show the Weather Details On WEBPAGE
city_name.innerText = weatherData.name;
weather_type.innerText = weatherData.weather[0].main;

// If Convert the Temperature in Celsius ( - 32) * (5/9)
temp.innerText = weatherData.main.temp;
min_temp.innerText = weatherData.main.temp_min;
max_temp.innerText = weatherData.main.temp_max;
}


function checkWeather(city) {
  const apikey = '0023c10b6c1582cb4741a42787b3a2cd';
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=&units=metric&appid=" + apikey;

  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button")

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Set the innerHTML of the ".city" element here, where "data" is accessible.
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidit + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "mph";
    })
    .catch((error) => {
      console.log("Error fetching weather data: ", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  checkWeather();
});
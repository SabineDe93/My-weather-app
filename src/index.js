let now = new Date();
let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];

h2.innerHTML = `${day} ${hours}:${minutes} | ${month} ${date}, ${year}`;

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#condition").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let apiKey = "ddf6f892fd64acbf1e1142177a949da1";
  let city = document.querySelector("#search-text-input").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

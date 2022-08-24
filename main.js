let input = document.querySelector('.input');
let city = document.querySelector('.city');
let country = document.querySelector('.country');
let temperature = document.querySelector('.temperature');
let visibility = document.querySelector('.visibility');
let windSpeed = document.querySelector('.wind-speed');
let cloud = document.querySelector('.cloud');
let des = document.querySelector('.description');


const DEFAULT_VALUE = '--';

function render(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667&lang=vi&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      city.innerHTML = data.name;
      country.innerHTML = data.sys.country;
      temperature.innerHTML = `${Math.round(data.main.temp)} <sup>o</sup>C`;
      visibility.innerHTML = `${data.visibility} m`;
      windSpeed.innerHTML = `${data.wind.speed} m/s`;
      cloud.innerHTML = `${data.main.humidity} m`;
      des.innerHTML = data.weather[0].description;
    })
    .catch(() => {
      city.innerHTML = DEFAULT_VALUE;
      country.innerHTML = DEFAULT_VALUE;
      temperature.innerHTML = DEFAULT_VALUE;
      visibility.innerHTML = DEFAULT_VALUE;
      windSpeed.innerHTML = DEFAULT_VALUE;
      cloud.innerHTML = DEFAULT_VALUE;
      des.innerHTML = DEFAULT_VALUE;
    })
}

input.onkeydown = (e) => {
  if (e.which === 13) {
    render(input.value.trim());
    input.value = '';
  }
}


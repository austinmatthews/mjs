const cityForm = document.querySelector('.change-location');
const weatherCard = document.querySelector('.card');
const weatherDetails = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUi = (data) => {
  const { cityData, weatherData } = data;

  //update details
  weatherDetails.innerHTML = `
  <h5 class="my-3">${cityData.LocalizedName}</h5>
  <div class="my-3">${weatherData.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weatherData.Temperature.Imperial.Value}</span>
    <span>&deg;F</span>
  </div>
  `;

  //update day/night icon images
  weatherData.IsDayTime
    ? time.setAttribute('src', 'img/day.svg')
    : time.setAttribute('src', 'img/night.svg');

  icon.setAttribute('src', `img/icons/${weatherData.WeatherIcon}.svg`);

  //remove d-none class if present
  if (weatherCard.classList.contains('d-none')) {
    weatherCard.classList.remove('d-none');
  }
};

const updateCity = async (city) => {
  const cityData = await getCity(city);
  const weatherData = await getWeather(cityData.Key);
  return { cityData, weatherData };
};

cityForm.addEventListener('submit', (e) => {
  //prevent default action
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with the new city
  updateCity(city)
    .then((data) => updateUi(data))
    .catch((err) => console.log(err));

  //save to local storage
  localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
  updateCity(localStorage.getItem('city'))
    .then((data) => updateUi(data))
    .catch((err) => console.log(err));
}

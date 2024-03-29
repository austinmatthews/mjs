const apiKey = 'dEMvQy7qQ9W6zGWQVnpVcn9OBI3iIvRg';

const getWeather = async (locationKey) => {
  const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${locationKey}?apikey=${apiKey}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data[0];
};

const getCity = async (city) => {
  const baseUrl =
    'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data[0];
};

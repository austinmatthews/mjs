class Forecast {
  constructor() {
    this.apiKey = 'dEMvQy7qQ9W6zGWQVnpVcn9OBI3iIvRg';
    this.baseWeatherUri =
      'http://dataservice.accuweather.com/currentconditions/v1/';
    this.baseCityUri =
      'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
  async getWeather(locationKey) {
    const query = `${locationKey}?apikey=${this.apiKey}`;
    const response = await fetch(this.baseWeatherUri + query);
    const data = await response.json();

    return data[0];
  }
  async getCity(city) {
    const query = `?apikey=${this.apiKey}&q=${city}`;
    const response = await fetch(this.baseCityUri + query);
    const data = await response.json();

    return data[0];
  }
  async updateCity(city) {
    const cityData = await this.getCity(city);
    const weatherData = await this.getWeather(cityData.Key);
    return { cityData, weatherData };
  }
}

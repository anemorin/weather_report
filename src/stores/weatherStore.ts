import { makeAutoObservable } from 'mobx';
import { CityType, WeatherResponseType } from '../types/WeatherPageTypes/CityType';
import WeatherPageServices from '../services/WeatherPageServices';
import { OptionType } from '../components/Select';

class WeatherStore {
  currentCity?: CityType;

  currentWeather?: WeatherResponseType;

  cities: CityType[];

  constructor() {
    makeAutoObservable(this);
    this.currentCity = undefined;
    this.cities = [];
  }

  public get preparedOptions() {
    return this.cities.map(city => {
      return {
        value: city.id,
        label: city.name,
        countryCode: city.countryCode,
      } as unknown as OptionType;
    });
  }

  public async fetchCities(cityName: string) {
    try {
      const response = await WeatherPageServices.getCitys({ namePrefix: cityName });
      if (response.status === 200) {
        this.cities = response.data.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async fetchWeather() {
    try {
      console.warn(this.currentCity);
      if (this.currentCity) {
        const response = await WeatherPageServices.getWeather({
          lon: this.currentCity.longitude,
          lat: this.currentCity.latitude
        });
        if (response.status === 200) {
          this.currentWeather = response.data;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  public setCurrentCity = (city: string | undefined) => {
    if (city) {
      this.currentCity = this.cities.find(item => item.id === city);
    } else {
      this.currentCity = undefined;
    }
  };
}

export default WeatherStore;

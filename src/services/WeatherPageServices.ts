import {
  CityRequestType,
  CityResponseType,
  WeatherRequestType,
  WeatherResponseType,
} from '../types/WeatherPageTypes/CityType';
import {
  GeoApiConnection,
  WeatherApiConnection,
  weatherApiKey,
} from './ApiConnection';

class WeatherPageServices {
  static async getCitys(request: CityRequestType) {
    const response = await GeoApiConnection.get<CityResponseType>(
      `/cities?limit=${request.limit ?? 10}&namePrefix=${request.namePrefix}`,
    );
    return response;
  }

  static async getWeather(request: WeatherRequestType) {
    const response = await WeatherApiConnection.get<WeatherResponseType>(
      `?lat=${request.lat}&lon=${request.lon}&appid=${weatherApiKey}`,
    );
    return response;
  }
}

export default WeatherPageServices;

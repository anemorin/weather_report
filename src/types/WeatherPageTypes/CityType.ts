export interface CityType {
  id: string;
  name: string;
  countryCode: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface CityResponseType {
  data: CityType[];
}

export interface CityRequestType {
  limit?: number;
  namePrefix: string;
}

export interface WeatherResponseType {
  main: {
    temp: number;
    feels_like: number;
  }
  weather: Array<{
    id: number;
    main: string;
  }>
}

export interface WeatherRequestType {
  lat: number;
  lon: number;
}
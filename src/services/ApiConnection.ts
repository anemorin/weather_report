import axios from 'axios';

/** Базовый URL */
export const geoAppApiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/';

export const weatherAppApiUrl = 'http://api.openweathermap.org/data/2.5/weather';

export const weatherApiKey = 'f594ef6b9f5f8f3382ed41b180789974';

/** Базовые настройки axios */
export const GeoApiConnection = axios.create({
  baseURL: `${geoAppApiUrl ?? ''}`,
  headers: {
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '29ac5ee362msh069b9524a1127f7p1d8abdjsn20a941129fa6',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
  maxContentLength: 512 * 1024 * 1024,
});

/** Базовые настройки axios */
export const WeatherApiConnection = axios.create({
  baseURL: `${weatherAppApiUrl ?? ''}`,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Methods': 'GET',
    // 'Access-Control-Allow-Credentials': 'true',
    // 'sec-fetch-mode': 'no-cors'
  },
  maxContentLength: 512 * 1024 * 1024,
});

const unblobError = async (error: unknown) =>
  error instanceof Blob ? JSON.parse(await error.text()) : error;

/** Порядок обработки ошибок ответа сервера */
GeoApiConnection.interceptors.response.use(
  response => {
    if (response.status === 401 || response.status === 400) {
      throw response;
    }
    return response;
  },
  async error => {
    const errors = error?.response?.data;
    throw await unblobError(errors);
  },
);

import { createContext } from 'react';
import WeatherStore from '../stores/weatherStore';

export const storeContext = createContext({
  weatherStore: new WeatherStore(),
});

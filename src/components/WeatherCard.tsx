import { useEffect, useMemo } from 'react';
import UseStores from '../hooks/useStores';
import { observer } from 'mobx-react';
import { formatDegree, getIconByWeather } from '../utils';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  padding: 32px;
  border-radius: 8px;

  img {
    width: 64px;
    height: 64px;
    filter: invert();
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeatherCard: React.FC = () => {
  const { weatherStore } = UseStores();

  useEffect(() => {
    weatherStore.fetchWeather();
  }, [weatherStore.currentCity]);

  const weather = useMemo(() => {
    return (
      weatherStore.currentWeather && (
        <CardHeader>
          {getIconByWeather(weatherStore?.currentWeather?.weather[0].main)}
          <span>{formatDegree(weatherStore.currentWeather?.main.temp)}</span>
        </CardHeader>
      )
    );
  }, [weatherStore.currentWeather]);

  return (
    <CardContainer>
      <span>Selected city: {weatherStore?.currentCity?.name}</span>
      <span>Country: {weatherStore?.currentCity?.country}</span>
      {weather}
    </CardContainer>
  );
};

export default observer(WeatherCard);

import React, { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import UseStores from '../hooks/useStores';
import CustomSelect from '../components/Select';
import { observer } from 'mobx-react';
import WeatherCard from '../components/WeatherCard';
import useDebounce from '../hooks/useDebounce';

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState<string | undefined>(undefined);
  const { weatherStore } = UseStores();
  const debounceSearch = useDebounce(city, 1000);

  useEffect(() => {
    if (city) {
      weatherStore.fetchCities(city);
    }
  }, [debounceSearch]);

  return (
    <PageLayout gap={24}>
      <CustomSelect
        options={weatherStore.preparedOptions}
        placeholder="Select city"
        onInputChange={city => setCity(city)}
        onChangeValue={city => {
          if (city) {
            weatherStore.setCurrentCity(city.value ?? undefined);
          }
        }}
        isClearable
        isSearchable
        isOptionWithCountryCode
      />
      <div>{weatherStore.currentCity && <WeatherCard />}</div>
    </PageLayout>
  );
};

export default observer(WeatherPage);

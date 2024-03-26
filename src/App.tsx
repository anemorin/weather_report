import React from 'react';
import Header from './components/Header';
import WeatherPage from './views/WeatherPage';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <WeatherPage />
    </>
  );
};

export default App;

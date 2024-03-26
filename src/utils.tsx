export const getIconByWeather = (weather?: string) => {
  switch (weather) {
    case 'Clear':
      return (
        <img
          src="sun.png"
          alt="sun"
        />
      );
    case 'Rain' || 'Drizzle':
      return (
        <img
          src="rain.png"
          alt="rain"
        />
      );
    case 'Snow':
      return (
        <img
          src="snow.png"
          alt="snow"
        />
      );
    case 'Thunderstorm':
      return (
        <img
          src="storm.png"
          alt="storm"
        />
      );
    case 'Clouds':
      return (
        <img
          src="clouds.png"
          alt="clouds"
        />
      );
    case 'Atmosphere':
      return (
        <img
          src="dust.png"
          alt="clouds"
        />
      );
    default:
      return null;
  }
};

export const formatDegree = (degree: number) => {
  return `${(degree - 273.15).toFixed(1)}°C`;
};

export const debounce = <T extends (...args: any[]) => ReturnType<T>>(
  callback: T,
  timeout: number,
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

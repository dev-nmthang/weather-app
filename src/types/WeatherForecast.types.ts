interface WeatherDescription {
  description: string;
  code: number;
  icon: string;
}

interface WeatherData {
  valid_date: string;
  temp: number; // Average Temperature
  max_temp: number; // Maximum Temperature
  min_temp: number; //Minimum Temperature
  weather: WeatherDescription;
  wind_spd: number; // Wind speed (m/s)
  rh: number; // Average relative humidity (%)
}

export interface WeatherForecastResponse {
  city_name: string;
  country_code: string;
  data: WeatherData[];
}

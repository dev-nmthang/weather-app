import { TemperatureUnit } from "@/constant/enum";
import axios from "@/services/axiosInstance";
import { WeatherForecastResponse } from "@/types/WeatherForecast.types";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const useWeatherForecast = () => {
  const [city, setCity] = useState<string>("");
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>(
    TemperatureUnit.Celsius
  );
  const [forecastData, setForecastData] =
    useState<WeatherForecastResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const changeCity = (newCity: string) => {
    setCity(newCity);
  };

  const changeTemperatureUnit = () => {
    setTemperatureUnit((prev) => {
      return prev === TemperatureUnit.Celsius
        ? TemperatureUnit.Fahrenheit
        : TemperatureUnit.Celsius;
    });
  };

  useEffect(() => {
    const fetchWeatherData = async (latitude?: number, longitude?: number) => {
      setLoading(true);
      setError(null);
      try {
        const response =
          latitude && longitude
            ? await axios.get<WeatherForecastResponse>(
                `${API_URL}?key=${API_KEY}&lat=${latitude}&lon=${longitude}&days=${7}&units=${temperatureUnit}`
              )
            : await axios.get<WeatherForecastResponse>(
                `${API_URL}?key=${API_KEY}&city=${city}&days=${7}&units=${temperatureUnit}`
              );

        if (response.data) {
          setForecastData(response.data);
          return;
        }
        setError("No results found. Please try again.");
      } catch (err) {
        console.error("Error fetching data", err);
        setError("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeatherData();
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            console.error("Error getting location", error);
            setError("Unable to retrieve your location.");
            setLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    }
  }, [city, temperatureUnit]);

  return {
    forecastData,
    temperatureUnit,
    loading,
    error,
    changeCity,
    changeTemperatureUnit,
  };
};

export default useWeatherForecast;

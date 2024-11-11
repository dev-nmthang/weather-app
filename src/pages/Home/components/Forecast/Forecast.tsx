import { WeatherForecastResponse } from "@/types/WeatherForecast.types";
import {
  ForecastContainer,
  ForecastTitle,
  ForecastGrid,
  ForecastCard,
  ForecastDate,
  ForecastTemp,
  ForecastDescription,
} from "./style";
import formatDate from "@/helpers/formatDate";
import { TemperatureUnit } from "@/constant/enum";

interface ForecastProps {
  forecastData: WeatherForecastResponse | null;
  temperatureUnit: TemperatureUnit;
}

export default function Forecast({
  forecastData,
  temperatureUnit,
}: ForecastProps) {
  const unit = temperatureUnit === TemperatureUnit.Celsius ? "C" : "F";

  return (
    <ForecastContainer>
      <ForecastTitle>7-Day Forecast</ForecastTitle>
      <ForecastGrid>
        {forecastData?.data.map((item, index) => (
          <ForecastCard key={item.valid_date + "-" + index}>
            <ForecastDate>{formatDate(item.valid_date)}</ForecastDate>
            <ForecastTemp>
              {item.temp}°{unit}
            </ForecastTemp>
            <ForecastDescription>
              {item.weather.description}
            </ForecastDescription>
          </ForecastCard>
        ))}
      </ForecastGrid>
    </ForecastContainer>
  );
}

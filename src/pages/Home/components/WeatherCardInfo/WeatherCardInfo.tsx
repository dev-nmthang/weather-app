import { FaWind, FaCloudRain } from "react-icons/fa";
import {
  FlexCards,
  Subtitle,
  WeatherDetails,
  WeatherInfo,
  WeatherStats,
  StatItem,
  SearchHistory,
  WeatherCard,
  CityWrapper,
} from "./style";
import { WeatherForecastResponse } from "@/types/WeatherForecast.types";
import { TemperatureUnit } from "@/constant/enum";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface WeatherCardInfoProps {
  forecastData: WeatherForecastResponse | null;
  temperatureUnit: TemperatureUnit;
  onSearch: (city: string) => void;
}

export default function WeatherCardInfo({
  forecastData,
  temperatureUnit,
  onSearch,
}: WeatherCardInfoProps) {
  const [localStorageValue] = useLocalStorage<string[]>("cities", []);

  const currentInfo = forecastData?.data[0];
  const unit = temperatureUnit === TemperatureUnit.Celsius ? "C" : "F";

  return (
    <FlexCards>
      <WeatherCard>
        <Subtitle>{forecastData?.city_name} </Subtitle>
        <WeatherDetails>
          <WeatherInfo title="Temperature">
            {currentInfo?.temp}°{unit}
          </WeatherInfo>
        </WeatherDetails>
        <WeatherStats>
          <StatItem title="Humidity">
            {currentInfo?.weather.description}
          </StatItem>
          <StatItem title="Wind Speed">
            <FaWind color="#27a87f" className="text-lg" />
            <span>{currentInfo?.wind_spd} m/s</span>
          </StatItem>
          <StatItem title="Humidity">
            <FaCloudRain color="#4cbfd9" className="text-lg" />
            <span>{currentInfo?.rh}%</span>
          </StatItem>
        </WeatherStats>
      </WeatherCard>
      <WeatherCard>
        <Subtitle>Recent Searches</Subtitle>

        <SearchHistory>
          {localStorageValue.map((item, index) => (
            <CityWrapper
              key={item + "-" + index}
              onClick={() => onSearch(item)}
            >
              {item}
            </CityWrapper>
          ))}
        </SearchHistory>
      </WeatherCard>
    </FlexCards>
  );
}

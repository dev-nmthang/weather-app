import Forecast from "./components/Forecast/Forecast";
import Search from "./components/Search/Search";
import WeatherCardInfo from "./components/WeatherCardInfo/WeatherCardInfo";
import {
  Container,
  MaxWidthContainer,
  Card,
  Title,
  ErrorMessage,
  SkeletonContainer,
  SkeletonItem,
} from "./style";
import useWeatherForecast from "@/hooks/useWeatherForecast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const {
    forecastData,
    loading,
    error,
    temperatureUnit,
    changeCity,
    changeTemperatureUnit,
  } = useWeatherForecast();

  return (
    <Container>
      <MaxWidthContainer>
        <Card>
          <Title>Weather Dashboard</Title>
          <Search
            temperatureUnit={temperatureUnit}
            onSearch={changeCity}
            onChangeTemperatureUnit={changeTemperatureUnit}
          />

          {loading && (
            <>
              <SkeletonContainer>
                <SkeletonItem>
                  <Skeleton height={180} />
                </SkeletonItem>

                <SkeletonItem>
                  <Skeleton height={180} />
                </SkeletonItem>
              </SkeletonContainer>
              <br />
              <SkeletonItem>
                <Skeleton height={200} />
              </SkeletonItem>
            </>
          )}

          {error && <ErrorMessage>{error}</ErrorMessage>}

          {!loading && !error && forecastData && (
            <>
              <WeatherCardInfo
                temperatureUnit={temperatureUnit}
                forecastData={forecastData}
                onSearch={changeCity}
              />
              <Forecast
                temperatureUnit={temperatureUnit}
                forecastData={forecastData}
              />
            </>
          )}
        </Card>
      </MaxWidthContainer>
    </Container>
  );
}

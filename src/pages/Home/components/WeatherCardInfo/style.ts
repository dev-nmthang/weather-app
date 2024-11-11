import styled from "styled-components";
import { device } from "@/styles/Breakpoints";

export const FlexCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media ${device.md} {
    flex-direction: row;
  }
`;

export const WeatherCard = styled.div`
  flex: 1;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 0.25rem;
`;

export const SearchHistory = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const WeatherDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const WeatherInfo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const WeatherStats = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  @media ${device.md} {
    flex-direction: row;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 2rem;
`;

export const CityWrapper = styled.span`
  padding: 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;
`;

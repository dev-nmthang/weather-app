import styled from "styled-components";
import { device } from "@/styles/Breakpoints";

export const ForecastContainer = styled.div`
  margin-top: 1.5rem;
`;

export const ForecastTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ForecastGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media ${device.md} {
    flex-wrap: nowrap;
  }
`;

export const ForecastCard = styled.div`
  flex: 1 1 calc(50% - 1rem);
  max-width: calc(50% - 0.5rem);
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  @media ${device.md} {
    flex: 1;
    max-width: 100%;
  }
`;

export const ForecastDate = styled.div`
  font-weight: 500;
`;

export const ForecastTemp = styled.div`
  margin: 1.5rem 0;
`;

export const ForecastDescription = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

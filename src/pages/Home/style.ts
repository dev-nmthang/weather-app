import styled from "styled-components";
import { device } from "@/styles/Breakpoints";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #60a5fa, #93c5fd);
  padding: 1rem;
  transition: all 0.5s;
  @media ${device.md} {
    padding: 2rem;
  }
`;

export const MaxWidthContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

export const Card = styled.div`
  backdrop-filter: blur(12px);
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  margin-top: 2;
  color: ${({ theme }) => theme.colors.error};
`;

export const SkeletonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-direction: column;
  @media ${device.md} {
    padding: 0;
    flex-direction: row;
  }
`;

export const SkeletonItem = styled.div`
  flex: 1;
  opacity: 0.6;
`;

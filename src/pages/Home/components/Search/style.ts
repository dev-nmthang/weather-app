import styled from "styled-components";
import { device } from "@/styles/Breakpoints";

export const FlexContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  @media ${device.md} {
    flex-direction: row;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.colors.darkText};
  &:focus {
    border-color: rgba(255, 255, 255, 0.5);
    outline: none;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
  &:hover {
    color: ${({ theme }) => theme.colors.darkGray};
  }
  transition: color 0.3s;
  border: none;
  background: none;
  cursor: pointer;
`;

export const SwitchButton = styled.button`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  color: inherit;
  border-radius: 0.375rem;
  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
  transition: all 0.3s;
  cursor: pointer;
`;

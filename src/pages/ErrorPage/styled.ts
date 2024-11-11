import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8d7da;
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
`;

export const ErrorMessage = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

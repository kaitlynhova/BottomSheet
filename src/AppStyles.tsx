import styled, { css } from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    color: ${theme.onBackground};
    max-width: 500px;
    padding: 16px;
  `}
`;

export const DemoChild = styled.div`
  background: linear-gradient(rgb(230, 100, 101), rgb(145, 152, 229));
  color: #fff;
  font-weight: bold;
  padding: 16px;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.background};
    color: ${theme.onBackground};
    display: flex;
    height: 100vh;
    justify-content: center;
  `}
`;

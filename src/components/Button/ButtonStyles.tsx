import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  ${({ theme }) => css`
    -webkit-appearance: none;
    background-color: ${theme.button};
    border-radius: 100px;
    border: none;
    color: ${theme.onButton};
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    margin-right: 4px;
    padding: 8px 12px;
    width: fit-content;
  `}
`;

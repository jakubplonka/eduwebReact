import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #ffd82b;
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  padding: 0;
  ${({secondary}) => (
    secondary && css`
      width: 105px;
      height: 30px;
      font-size: 10px;
      background-color: #e6e6e6;
    `
    )}
`;

export default Button;
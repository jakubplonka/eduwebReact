import styled, { css } from 'styled-components';

const Button = styled.button`
  /* background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'}; */
  background-color: ${props => props.theme.primary};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  padding: 0;
  ${({ secondary }) =>
    secondary &&
    css`
      width: 105px;
      height: 30px;
      font-size: 10px;
      background-color: hsl(0, 0%, 90%);
    `}
`;

export default Button;

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulb from 'assets/icons/bulb.svg';
import logout from 'assets/icons/logout.svg';
import pen from 'assets/icons/pen.svg';
import plus from 'assets/icons/plus.svg';
import twitter from 'assets/icons/twitter.svg';
import ButtonIcon from './Buttonicon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.primary};
`;

storiesOf('ButtonIcon', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('bulb', () => <ButtonIcon icon={bulb} />)
  .add('active', () => <ButtonIcon active icon={bulb} />)
  .add('logout', () => <ButtonIcon icon={logout} />)
  .add('pen', () => <ButtonIcon icon={pen} />)
  .add('plus', () => <ButtonIcon icon={plus} />)
  .add('twitter', () => <ButtonIcon icon={twitter} />);

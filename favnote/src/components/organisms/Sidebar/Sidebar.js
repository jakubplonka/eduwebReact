import React from 'react';
import { Link } from 'react-router-dom'
import ButtonIcon from 'components/atoms/Buttonicon/Buttonicon';
import bulb from 'assets/icons/bulb.svg';
import logout from 'assets/icons/logout.svg';
import pen from 'assets/icons/pen.svg';
import twitter from 'assets/icons/twitter.svg';


const Sidebar = () => (
  <div>
    <p>logo</p>
    <div>
      <ButtonIcon as={Link} to="/" icon={pen} />
      <ButtonIcon as={Link} to="/articles" icon={bulb} />
      <ButtonIcon as={Link} to="/twitters" icon={twitter} />
    </div>
    <ButtonIcon as={Link} to="/" icon={logout} />
  </div>
)

export default Sidebar;
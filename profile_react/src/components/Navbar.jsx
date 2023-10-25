import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
`;

const Logo = styled.div`
  font-size: 50px;
  cursor: pointer;
  color: var(--point-color);
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const MenuItem = styled.li`
  padding: 8px 12px;
  &:hover {
    background-color: lightcoral;
    border-radius: 4px;
  }
  cursor: pointer;
  font-size: 25px;
  color: var(--point-color);
`;

const NavbarBottomLine = styled.span`
  border-bottom: 2px solid var(--point-color);
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>SUJUNG LIM</Logo>
      <Menu>
        <MenuItem>Main</MenuItem>
        <MenuItem>About Me</MenuItem>
        <MenuItem>Portfolio</MenuItem>
      </Menu>
      <NavbarBottomLine></NavbarBottomLine>
    </NavbarContainer>
  );
}

export default Navbar;

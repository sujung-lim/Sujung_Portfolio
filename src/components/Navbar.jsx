import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  height: 10vh;

  position: sticky;
  top: 0;
  background-color: var(--back-color);
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 50px;
  cursor: pointer;
  color: var(--point-color);
  padding-left: 20px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding-right: 30px;
`;

const MenuItem = styled.li`
  padding: 8px 12px;
  &:hover {
    border-bottom: 2px solid var(--point-color);
  }
  cursor: pointer;
  font-size: 25px;
`;

const StyledLink = styled(Link)`
  color: var(--point-color);
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>SUJUNG LIM</Logo>
      <Menu>
        <MenuItem>
          <StyledLink to="/">Home</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
}

export default Navbar;

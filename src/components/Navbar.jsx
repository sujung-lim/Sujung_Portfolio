import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = path => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <NavbarContainer>
      <Logo onClick={() => handleMenuClick('/')}>SUJUNG LIM</Logo>
      <Menu>
        <MenuItem active={location.pathname === '/'}>
          <StyledLink onClick={() => handleMenuClick('/')} to="/">
            <span>Home</span>
          </StyledLink>
        </MenuItem>
        <MenuItem active={location.pathname === '/contact'}>
          <StyledLink onClick={() => handleMenuClick('/contact')} to="/contact">
            <span>Contact</span>
          </StyledLink>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
}

export default Navbar;

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

const Logo = styled.nav`
  font-size: 50px;
  cursor: pointer;
  color: var(--point-color);
  padding-left: 20px;

  /* 모바일 화면 */
  @media (max-width: 767px) {
    padding-left: 10px;
    font-size: 30px;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding-right: 30px;

  /* 모바일 화면 */
  @media (max-width: 767px) {
    font-size: 20px;
    padding-right: 10px;
  }
`;

const MenuItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 25px;

  span {
    box-shadow: ${props =>
      props.active ? 'inset 0 -10px 0 var(--pink-color)' : 'none'};
  }

  &:hover {
    span {
      box-shadow: inset 0 -10px 0 var(--pink-color);
    }
  }
`;

const StyledLink = styled(Link)`
  color: var(--point-color);
`;

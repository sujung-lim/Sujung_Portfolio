import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-color);
  padding: 8px 12px;
`;

const Logo = styled.div`
  font-size: 50px;
  cursor: pointer;
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
`;

const NavbarDiv = styled.div``;
// 메뉴 아이템을 가운데로 위치시키기 위한 의미없는 div

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>임수정</Logo>
      <Menu>
        <MenuItem>메인</MenuItem>
        <MenuItem>이력서</MenuItem>
        <MenuItem>자기소개서</MenuItem>
        <MenuItem>포트폴리오</MenuItem>
      </Menu>
      <NavbarDiv></NavbarDiv>
    </NavbarContainer>
  );
}

export default Navbar;

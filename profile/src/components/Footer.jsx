import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--main-color);
`;

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 10%;
  padding: 10px;
  margin: 0;
`;

const ContactItem = styled.li`
  font-size: 16px;
`;

function Footer() {
  return (
    <FooterContainer>
      <ContactList>
        <ContactItem>연락처: 010 4052 6579</ContactItem>
        <ContactItem>이메일: sujunglim94@gmail.com</ContactItem>
        <ContactItem>깃허브: sujung-lim</ContactItem>
        <ContactItem>주소: 경기도 파주시 쇠재로 30</ContactItem>
      </ContactList>
    </FooterContainer>
  );
}

export default Footer;

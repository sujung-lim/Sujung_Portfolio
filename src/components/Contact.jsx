import React from 'react';
import * as S from '../styles/Contact.style';

function Contact() {
  return (
    <S.ContactSection>
      <S.ProfileContainer>
        <S.ProfileImage
          src={process.env.PUBLIC_URL + '/img/profile.JPG'}
          alt="Profile"
        />
        <p>임수정</p>
        <p>Front-end Developer</p>
        <S.ProfileBtnContainer>
          <button>E-mail</button>
          <button>Phone</button>
        </S.ProfileBtnContainer>
      </S.ProfileContainer>
      <div>
        <S.ContactListUl>
          <S.ContactList>Resume</S.ContactList>
          <S.ContactList>GitHub</S.ContactList>
          <S.ContactList>Blog</S.ContactList>
        </S.ContactListUl>
      </div>
    </S.ContactSection>
  );
}

export default Contact;

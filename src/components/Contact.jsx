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
          <S.ContactList>
            <a
              href="https://sujunglim.oopy.io/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Resume</p>
            </a>
          </S.ContactList>
          <S.ContactList>
            <a
              href="https://github.com/sujung-lim"
              target="_blank"
              rel="noreferrer"
            >
              <p>GitHub</p>
            </a>
          </S.ContactList>
          <S.ContactList>
            <a
              href="https://dev-su-diary.tistory.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Blog</p>
            </a>
          </S.ContactList>
        </S.ContactListUl>
      </div>
    </S.ContactSection>
  );
}

export default Contact;

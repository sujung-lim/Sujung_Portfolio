import React from 'react';
import * as S from '../styles/Contact.style';
import { useState } from 'react';

function Contact() {
  const [showModal, setShowModal] = useState(false);
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
          <a href="mailto:sujunglim94@gmail.com">
            <button>E-mail</button>
          </a>
          <button onClick={() => setShowModal(true)}>Phone</button>
          {showModal && (
            <S.ModalBackground onClick={() => setShowModal(false)}>
              <S.ModalContainer onClick={e => e.stopPropagation()}>
                <p>
                  메시지 전송: <a href="sms:010-4052-6579">010-4052-6579</a>
                </p>
                <button onClick={() => setShowModal(false)}>Close</button>
              </S.ModalContainer>
            </S.ModalBackground>
          )}
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

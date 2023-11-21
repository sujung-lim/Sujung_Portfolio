import styled from 'styled-components';

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  text-align: center;
  margin: 3% 0 3% 0;

  p:first-of-type {
    font-size: 30px;
  }
  p:nth-of-type(2) {
    font-size: 20px;
  }
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

export const ProfileBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10%;
  margin-top: 10px;

  button {
    font-size: 20px;
    padding: 0 5px 0 5px;
    border: none;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10%;
    background-color: var(--gray-color);
    color: #cb272c;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--pink-color);
  padding: 30px;
  z-index: 1000;

  button {
    margin-top: 10px;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ContactListUl = styled.ul`
  display: flex;
  gap: 10%;
  justify-content: center;
  list-style: none;
  margin-top: calc(1rem + 1%);
  margin-bottom: calc(1rem + 1%);

  /* 모바일 화면*/
  @media (max-width: 767px) {
    flex-direction: column;

    & > *:not(:last-child) {
      /* gap이 적용이 되지 않아서 margin 사용 */
      margin-bottom: 10%;
    }
  }
`;

export const ContactList = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 100px;
  border-radius: 5%;
  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.1) /* 왼쪽과 위쪽 그림자 */,
    5px 5px 10px rgba(0, 0, 0, 0.1) /* 오른쪽과 아래쪽 그림자 */;
  cursor: pointer;

  /* 이력서 */
  &:first-child::before {
    content: '';
    background-image: url('${process.env.PUBLIC_URL}/img/cv.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  /* 깃허브 */
  &:nth-child(2)::before {
    content: '';
    background-image: url('${process.env.PUBLIC_URL}/img/Github.jpeg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  /* 블로그 */
  &:nth-child(3)::before {
    content: '';
    background-image: url('${process.env.PUBLIC_URL}/img/blog.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  p {
    position: relative;
    z-index: 1;
    font-weight: bold;
    font-size: 50px;
  }

  @media (min-width: 1300px) {
    height: 250px;
  }
`;

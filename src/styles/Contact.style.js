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

export const ContactListUl = styled.ul`
  display: flex;
  gap: 10%;
  justify-content: center;
  list-style: none;
  margin-top: calc(1rem + 1%);
  margin-bottom: calc(1rem + 1%);
`;

export const ContactList = styled.li`
  padding: 100px;
  font-size: 30px;
  border-radius: 5%;
  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.1) /* 왼쪽과 위쪽 그림자 */,
    5px 5px 10px rgba(0, 0, 0, 0.1) /* 오른쪽과 아래쪽 그림자 */;

  @media (min-width: 1300px) {
    height: 250px;
  }
`;

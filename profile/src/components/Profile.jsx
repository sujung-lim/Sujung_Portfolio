import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const AboutMe = styled.div`
  h3 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
`;

function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage src="../../public/img/profile.JPG" alt="Profile" />
      <AboutMe>
        <h3>임수정</h3>
        <p>Lorem ipsum...</p>
      </AboutMe>
    </ProfileContainer>
  );
}

export default Profile;

import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
`;

const Title = styled.div`
  display: flex;
`;

function Profile() {
  return (
    <ProfileContainer>
      <Title>
        <h2>FRONT-END</h2>
        <h2>DEVELOPER</h2>
      </Title>
    </ProfileContainer>
  );
}

export default Profile;

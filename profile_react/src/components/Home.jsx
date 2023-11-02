import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const HomeContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
`;

const TextFe = styled.h2`
  padding-left: 10%;
  font-weight: normal;
`;

const TextDev = styled.h2`
  text-align: center;
  font-weight: normal;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--point-color);
  font-size: 80px;
`;

const CarouselWrapper = styled.div`
  transition: transform 0.5s, opacity 0.5s;
  transform: ${({ showTitle2 }) =>
    showTitle2 ? 'translateX(0%)' : 'translateX(100%)'};
  opacity: ${({ showTitle2 }) => (showTitle2 ? 1 : 0)};
`;

const Title2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 150px;
  margin-top: 80px;
  color: var(--point-color);
`;

// 스크롤 다운 화살표
const AngleDownContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  .icon {
    font-size: 24px;
    color: var(--point-color);
  }

  &:hover .icon {
    transform: translateY(5px);
  }
`;

function Home() {
  const [showTitle2, setShowTitle2] = useState(false);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setShowTitle2(true);
    }, 1200);

    return () => clearTimeout(transitionTimer);
  }, []);

  // 아래 화살표 누르면 스크롤 다운
  const handleScrollDown = () => {
    const yOffset = window.innerHeight;
    window.scrollBy({ top: yOffset, behavior: 'smooth' });
  };

  return (
    <HomeContainer>
      <CarouselWrapper showTitle2={showTitle2}>
        {showTitle2 ? <Title2>PORTFOLIO</Title2> : null}
      </CarouselWrapper>
      {!showTitle2 && (
        <Title>
          <TextFe className="text-fe">FRONT-END</TextFe>
          <TextDev className="text-dev">DEVELOPER</TextDev>
        </Title>
      )}
      <AngleDownContainer onClick={handleScrollDown}>
        <FontAwesomeIcon icon={faAngleDown} />
      </AngleDownContainer>
    </HomeContainer>
  );
}

export default Home;

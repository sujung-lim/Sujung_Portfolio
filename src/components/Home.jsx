import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {
  HomeContainer,
  TextFe,
  TextDev,
  Title,
  CarouselWrapper,
  Title2,
  AngleDownContainer,
} from '../styles/Home.style';

function Home() {
  const [showTitle2, setShowTitle2] = useState(false);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setShowTitle2(true);
    }, 1500);

    return () => clearTimeout(transitionTimer);
  }, []);

  // 아래 화살표 누르면 스크롤 다운
  const handleScrollDown = () => {
    const yOffset = window.innerHeight;
    window.scrollBy({ top: yOffset, behavior: 'smooth' });
  };

  return (
    <>
      <HomeContainer className="section">
        <CarouselWrapper showTitle2={showTitle2 ? 1 : 0}>
          {showTitle2 ? <Title2>PORTFOLIO</Title2> : null}
        </CarouselWrapper>
        {!showTitle2 && (
          <Title>
            <TextFe className="text-fe">FRONT-END</TextFe>
            <TextDev className="text-dev">DEVELOPER</TextDev>
          </Title>
        )}
        <AngleDownContainer onClick={handleScrollDown}>
          <FontAwesomeIcon
            icon={faAngleDown}
            style={{ color: 'var(--point-color)', fontSize: '50px' }}
          />
        </AngleDownContainer>
      </HomeContainer>
      <Portfolio />
    </>
  );
}

export default Home;

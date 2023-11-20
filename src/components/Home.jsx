import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import * as S from '../styles/Home.style';

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
      <S.HomeContainer className="section">
        <S.CarouselWrapper showTitle2={showTitle2 ? 1 : 0}>
          {showTitle2 ? (
            <S.Title2>
              <S.TextPF>PORTFOLIO</S.TextPF>
            </S.Title2>
          ) : null}
        </S.CarouselWrapper>
        {!showTitle2 && (
          <S.Title>
            <S.TextFe className="text-fe">FRONT-END</S.TextFe>
            <S.TextDev className="text-dev">DEVELOPER</S.TextDev>
          </S.Title>
        )}
        <S.AngleDownContainer onClick={handleScrollDown}>
          <FontAwesomeIcon
            icon={faAngleDown}
            style={{ color: 'var(--point-color)', fontSize: '50px' }}
          />
        </S.AngleDownContainer>
      </S.HomeContainer>
      <Portfolio />
    </>
  );
}

export default Home;

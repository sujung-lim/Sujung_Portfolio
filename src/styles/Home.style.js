import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin-top: 50px;
  justify-content: center;
  height: 100vh;
`;

export const TextFe = styled.h2`
  padding-left: 10%;
  font-weight: normal;
`;

export const TextDev = styled.h2`
  text-align: center;
  font-weight: normal;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  color: var(--point-color);
  font-size: 80px;
`;

export const CarouselWrapper = styled.div.attrs(() => ({}))`
  transition: transform 0.5s, opacity 0.5s;
  transform: ${({ showTitle2 }) =>
    showTitle2 ? 'translateX(0%)' : 'translateX(100%)'};
  opacity: ${({ showTitle2 }) => (showTitle2 ? 1 : 0)};
`;

export const Title2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 80vh;
  font-size: 150px;
  color: var(--point-color);
`;

// 스크롤 다운 화살표
export const AngleDownContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

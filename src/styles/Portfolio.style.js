import styled from 'styled-components';

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: calc(100vh-10vh); /* navbar 높이 제외한 뷰포트 높이 */
  padding: 30px;

  img {
    display: block;
    width: 100%;
    height: 300px;
  }

  @media (min-width: 768px) {
    /* 태블릿 화면 */
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 767px) {
    /* 모바일 화면에서는 1열씩 나열 */
    grid-template-columns: 1fr;
  }
`;

export const PortfolioItem = styled.div`
  justify-self: center;
  text-align: center;
`;

/* 포트폴리오 이미지 */
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #c9a18b;
  opacity: 0.5;
  transition: opacity 0.3s ease;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover ${Overlay} {
    opacity: 0;
  }
`;

/* 포트폴리오 이름 */
export const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); // 텍스트의 배경
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: visible;
  transition: visibility 0s ease;

  ${ImageContainer}:hover & {
    visibility: hidden;
  }
`;

export const ProjectName = styled.a`
  font-size: 30px;
  color: inherit;
`;

export const ProjectType = styled.div`
  font-size: 24px;
`;

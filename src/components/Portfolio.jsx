import React from 'react';
import * as S from '../styles/Portfolio.style';

// 포트폴리오 데이터
const PortfolioData = [
  {
    id: 1,
    link: 'https://bebemarket.netlify.app/',
    imageUrl: process.env.PUBLIC_URL + '/img/Bebemarket.png',
    projectName: 'Bebe Market',
    projectType: 'WEB',
  },
  {
    id: 2,
    link: 'https://algoview.co.kr/',
    imageUrl: process.env.PUBLIC_URL + '/img/Algoview.png',
    projectName: 'Algoview',
    projectType: 'WEB',
  },
  {
    id: 3,
    link: 'https://yejify.github.io/GameMachine/',
    imageUrl: process.env.PUBLIC_URL + '/img/Gamemachine.png',
    projectName: 'Game Machine',
    projectType: 'WEB',
  },
  {
    id: 4,
    link: 'https://sujung-lim.github.io/Vanilla-JS-MyGroceries/',
    imageUrl: process.env.PUBLIC_URL + '/img/Mygroceries.png',
    projectName: 'My Groceries',
    projectType: 'WEB',
  },
  {
    id: 5,
    link: 'https://sujung-lim.github.io/javascript-message-board/',
    imageUrl: process.env.PUBLIC_URL + '/img/QandABoard.png',
    projectName: 'Q&A Message Board',
    projectType: 'Javascript',
  },
  {
    id: 6,
    link: '',
    imageUrl: process.env.PUBLIC_URL + '/img/Emons.png',
    projectName: 'Website Clone',
    projectType: 'WEB',
  },
];

function PortfolioGridItem({ link, imageUrl, projectName, projectType }) {
  return (
    <S.PortfolioItem>
      <S.ImageContainer>
        <a href={link} className="work-image">
          <img src={imageUrl} alt={projectName} />
        </a>
        <S.Overlay />
        <S.TextOverlay>
          <div className="work-description">
            <S.ProjectName href={link} className="project-name-link">
              {projectName}
            </S.ProjectName>
            <S.ProjectType className="paragraph-light">
              {projectType}
            </S.ProjectType>
          </div>
        </S.TextOverlay>
      </S.ImageContainer>
    </S.PortfolioItem>
  );
}

function Portfolio() {
  return (
    <S.PortfolioGrid>
      {PortfolioData.map((item, index) => (
        <PortfolioGridItem
          key={item.id}
          link={item.link}
          imageUrl={item.imageUrl}
          projectName={item.projectName}
          projectType={item.projectType}
        />
      ))}
    </S.PortfolioGrid>
  );
}

export default Portfolio;

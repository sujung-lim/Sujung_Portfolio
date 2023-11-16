import React from 'react';
import styled from 'styled-components';

// 포트폴리오 데이터
const PortfolioData = [
  {
    id: 1,
    link: 'https://bebemarket.netlify.app/',
    imageUrl: process.env.PUBLIC_URL + '/img/Bebemarket.png',
    projectName: 'Bebe Market',
    projectType: 'Web Project',
  },
  {
    id: 2,
    link: 'https://algoview.co.kr/',
    imageUrl: process.env.PUBLIC_URL + '/img/Algoview.png',
    projectName: 'Algoview',
    projectType: 'Web Project',
  },
  {
    id: 3,
    link: 'https://yejify.github.io/GameMachine/',
    imageUrl: process.env.PUBLIC_URL + '/img/Gamemachine.png',
    projectName: 'Game Machine',
    projectType: 'Web Project',
  },
  {
    id: 4,
    link: 'https://sujung-lim.github.io/Vanilla-JS-MyGroceries/',
    imageUrl: process.env.PUBLIC_URL + '/img/Mygroceries.png',
    projectName: 'My Groceries',
    projectType: 'Web Project',
  },
  {
    id: 5,
    link: 'https://sujung-lim.github.io/javascript-message-board/',
    imageUrl: process.env.PUBLIC_URL + '/img/QandABoard.png',
    projectName: 'Q&A Message Board',
    projectType: 'Javascript Project',
  },
  {
    id: 6,
    link: '',
    imageUrl: process.env.PUBLIC_URL + '/img/Emons.png',
    projectName: 'Website Clone with Bootstrap',
    projectType: 'Web Project',
  },
];

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: 100vh;
  padding: 30px;

  img {
    display: block;
    width: 100%;
    height: 250px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 767px) {
    // 모바일 화면에서는 1열씩 나열
    grid-template-columns: 1fr;
  }
`;

const PortfolioItem = styled.div`
  justify-self: center;
  text-align: center;
`;

function PortfolioGridItem({ link, imageUrl, projectName, projectType }) {
  return (
    <PortfolioItem>
      <a href={link} className="work-image">
        <img src={imageUrl} alt={projectName} />
      </a>
      <div className="work-description">
        <a href={link} className="project-name-link">
          {projectName}
        </a>
        <div className="paragraph-light">{projectType}</div>
      </div>
    </PortfolioItem>
  );
}

function Portfolio() {
  return (
    <PortfolioGrid>
      {PortfolioData.map((item, index) => (
        <PortfolioGridItem
          key={item.id}
          link={item.link}
          imageUrl={item.imageUrl}
          projectName={item.projectName}
          projectType={item.projectType}
        />
      ))}
    </PortfolioGrid>
  );
}

export default Portfolio;

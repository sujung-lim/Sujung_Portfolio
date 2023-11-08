import React from 'react';
import styled from 'styled-components';

// 포트폴리오 데이터
const PortfolioData = [
  {
    id: 1,
    link: 'https://bebemarket.netlify.app/',
    imageUrl: '../../public/img/Bebemarket.png',
    projectName: 'Bebe Market',
    projectType: 'Web Project',
  },
  {
    id: 2,
    link: 'https://algoview.co.kr/',
    imageUrl: '',
    projectName: 'Algoview',
    projectType: 'Web Project',
  },
  {
    id: 3,
    link: 'https://yejify.github.io/GameMachine/',
    imageUrl: '',
    projectName: 'Game Machine',
    projectType: 'Web Project',
  },
  {
    id: 4,
    link: 'https://sujung-lim.github.io/Vanilla-JS-MyGroceries/',
    imageUrl: '',
    projectName: 'My Groceries',
    projectType: 'Web Project',
  },
  {
    id: 5,
    link: '',
    imageUrl: '',
    projectName: '',
    projectType: '',
  },
  {
    id: 6,
    link: '',
    imageUrl: '',
    projectName: '',
    projectType: '',
  },
];

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const PortfolioItem = styled.div`
  height: 300px;
`;

function PortfolioGridItem({ link, imageUrl, projectName, projectType }) {
  return (
    <PortfolioItem>
      <a href={link} className="work-image w-inline-block">
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

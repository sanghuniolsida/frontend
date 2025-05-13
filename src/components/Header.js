import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  const headerConfig = {
    '/quiz': { title: '퀴즈 쏙! 쏙!', icon: '/bookicon.png' },
    '/question': { title: '이야기 쏙! 쏙!', icon: '/rainbow.png' },
    '/creating': { title: '이야기 쏙! 쏙!', icon: '/rainbow.png' },
    '/library': { title: '책장 쏙! 쏙!', icon: '/libraryicon.png' },
    '/home': { title: '이야기 쏙! 쏙!', icon: '/homeicon.png' },
    '/growth': { title: '성장 쑥! 쑥!', icon: '/growicon.png' },
  };

  const { title, icon } = headerConfig[location.pathname] || {
    title: '',
    icon: '',
  };

  return (
    <>
      <div className="header-top-color"></div>
      <header className="header">
        <h1 className="header-title">{title}</h1>
        {icon && <img src={icon} alt="페이지 아이콘" className="header-icon" />}
      </header>
    </>
  );
}

export default Header;

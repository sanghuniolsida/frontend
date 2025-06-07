import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const headerConfig = {
    '/quiz': { title: '퀴즈 쏙! 쏙!', icon: '/bookicon.png' },
    '/question': { title: '이야기 쏙! 쏙!', icon: '/rainbow.png' },
    '/secondstory': { title: '이야기 쏙! 쏙!', icon: '/rainbow.png' },
    '/creating': { title: '이야기 쏙! 쏙!', icon: '/rainbow.png' },
    '/library': { title: '책장 쏙! 쏙!', icon: '/libraryicon.png' },
    '/home': { title: '이야기 쏙! 쏙!', icon: '' },
    '/stats': { title: '성장 쑥! 쑥!', icon: '/Creating.png' },
    '/storyprocess': { title: '이야기 쏙! 쏙!', icon: '/storyprocess.png' },
    '/librarystory': { title: '이야기 쏙! 쏙!', icon: '/storyprocess.png' },
  };

  const { title, icon } = headerConfig[location.pathname] || {
    title: '',
    icon: '',
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    fetch('https://story-sok-sok.kro.kr/logout', {
      method: 'GET',
      credentials: 'include',
    })
      .catch((err) => {
        console.warn('⚠️ 로그아웃 요청 실패:', err); //필요는 없으나 임시 방편 메세지
      })
      .finally(() => {
        window.location.href = '/';
      });
  };

  return (
    <>
      <div className="header-top-color"></div>
      <header
        className="header"
        style={{
          backgroundColor:
            location.pathname === '/growth' || location.pathname === '/stats'
              ? '#FDF9E7'
              : '#FFFFFF',
        }}
      >
        <h1 className="header-title">{title}</h1>
        {location.pathname === '/home' ? (
          <button className="logout-button" onClick={handleLogout}>
            로그아웃
          </button>
        ) : (
          icon && <img src={icon} alt="페이지 아이콘" className="header-icon" />
        )}
      </header>
    </>
  );
}

export default Header;

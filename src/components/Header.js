import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
    <div className="header-top-color"></div>
    <header className="header">
      <h1 className="header-title">이야기 쏙! 쏙!</h1>
      <img src="/homeicon.png" alt="사용설명서 아이콘" className="header-icon" />
    </header>
    </>
  );
}

export default Header;

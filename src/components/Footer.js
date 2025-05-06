import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <button className="footer-btn">책장 쏙쏙</button>
      
      <button className="profile-circle">
        <img src="/homebuttonicon.png" alt="홈 버튼 아이콘" className="homebuttonicon-icon" />
      </button>
      
      <button className="footer-btn">성장 쑥쑥</button>
    </footer>
  );
}

export default Footer;

import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <button className="footer-btn" onClick={() => navigate('/library')}>책장 쏙쏙</button>
      
      <button className="profile-circle" onClick={() => navigate('/home')}>
        <img src="/homebuttonicon.png" alt="홈 버튼 아이콘" className="homebuttonicon-icon" />
      </button>
      
      <button className="footer-btn" onClick={() => navigate('/stats')}>성장 쑥쑥</button>
    </footer>
  );
}

export default Footer;

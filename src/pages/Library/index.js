// src/pages/Library/index.js
import React from 'react';
import Main from '../../components/Main';
import './library.css'; 

function Library() {
  const storedName = localStorage.getItem('username') || '사용자';
  const userName = storedName.startsWith('s') ? '상훈이' : storedName;
  
  return (
    <Main>
      <div className="library-container">
        <h2 className="library-title">📚 {userName}의 책장</h2>

        <div className="book-grid">
          {[...Array(6)].map((_, index) => ( // 지금은 6개만 보이도록, 추후 변경 예정
            <div className="book-slot" key={index}>
              <div className="book-placeholder">+</div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}

export default Library;

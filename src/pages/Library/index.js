import React, { useState } from 'react';
import Main from '../../components/Main';
import './library.css'; 

function Library() {
  const storedName = localStorage.getItem('username') || '사용자';
  const userName = storedName.startsWith('s') ? '상훈이' : storedName;

  const [bookSlots, setBookSlots] = useState(1);

  const handleAddSlot = () => {
    setBookSlots(prev => prev + 1);
  };

  const handleRemoveSlot = () => {
    if (bookSlots > 1) setBookSlots(prev => prev - 1);
  };

  return (
    <Main>
      <div className="library-container">
        <h2 className="library-title">📖 {userName}의 책장</h2>

        <div className="book-grid">
          {[...Array(bookSlots)].map((_, index) => (
            <div className="book-slot" key={index}>
              <div className="book-item">📖</div>
            </div>
          ))}
        </div>

        <div className="button-group">
          <button className="book-btn" onClick={handleAddSlot}>＋</button>
          <button className="book-btn" onClick={handleRemoveSlot}>－</button>
        </div>
      </div>
    </Main>
  );
}

export default Library;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/Main';
import './library.css';

const presetBooks = [
  { title: '퍼피와 키티', cover: '/dogcatstory/표지.png' }
];

function Library() {
  const navigate = useNavigate();
  const storedName = localStorage.getItem('username') || '사용자';
  const userName = storedName.startsWith('s') ? '상훈이' : storedName;

  const [bookSlots, setBookSlots] = useState(presetBooks.length + 1);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleAddSlot = () => setBookSlots((prev) => prev + 1);
  const handleRemoveSlot = () => {
    if (bookSlots > presetBooks.length + 1) {
      setBookSlots((prev) => prev - 1);
    }
  };

  const handleBookClick = (book) => {
    if (book) setSelectedBook(book);
  };

  const handleCloseModal = () => setSelectedBook(null);
  const handleViewStory = () => {
    navigate('/storyprocess', { state: selectedBook });
  };

  return (
    <Main>
      <div className="library-container">
        <h2 className="library-title">📖 {userName}의 책장</h2>

        <div className="book-grid">
          {[...Array(bookSlots)].map((_, index) => (
            <div className="book-slot-wrapper" key={index}>
              <div
                className="book-slot"
                onClick={() => handleBookClick(presetBooks[index])}
              >
                {presetBooks[index] ? (
                  <img
                    src={presetBooks[index].cover}
                    alt={presetBooks[index].title}
                    className="book-cover"
                  />
                ) : (
                  <div className="book-placeholder">＋</div>
                )}
              </div>
              {presetBooks[index] && (
                <div className="book-title">{presetBooks[index].title}</div>
              )}
            </div>
          ))}
        </div>

        <div className="button-group">
          <button className="book-btn" onClick={handleAddSlot}>＋</button>
          <button className="book-btn" onClick={handleRemoveSlot}>－</button>
        </div>
      </div>

      {selectedBook && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>『{selectedBook.title}』 동화를 펼쳐볼까요?</p>
            <div className="modal-buttons">
              <button onClick={handleCloseModal}>다시 선택하기</button>
              <button onClick={handleViewStory}>동화 보기</button>
            </div>
          </div>
        </div>
      )}
    </Main>
  );
}

export default Library;

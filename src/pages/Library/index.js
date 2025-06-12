import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/Main';
import './library.css';

const presetBooks = [
  { title: '퍼피와 키티', cover: '/dogcatstory/dogcat0.png' },
  { title: '루루와 웃는 구름', cover: '/rabitcloud/rabitcloud0.png' },
  { title: '화가 난 곰돌이', cover: '/bear/bear0.png' },
];

function Library() {
  const navigate = useNavigate();
  const storedName = localStorage.getItem('username') || '사용자';
  const userName = storedName.startsWith('s') ? '상훈이' : storedName;

  const savedBooks = JSON.parse(localStorage.getItem('bookshelf') || '[]');
  const allBooks = [...presetBooks, ...savedBooks];

  const [bookSlots, setBookSlots] = useState(allBooks.length + 1);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleAddSlot = () => setBookSlots((prev) => prev + 1);
  const handleRemoveSlot = () => {
    if (bookSlots > allBooks.length + 1) {
      setBookSlots((prev) => prev - 1);
    }
  };

  const handleBookClick = (book) => {
    if (book) setSelectedBook(book);
  };

  const handleCloseModal = () => setSelectedBook(null);
  const handleViewStory = () => {
    navigate('/librarystory', { state: selectedBook });
  };

  const handleGoToQuiz = () => {
    navigate('/quiz', { state: { title: selectedBook.title } });
  };

  return (
    <Main>
      <div className="library-container">
        <h2 className="library-title">📖 {userName}의 책장</h2>

        <div className="book-grid">
          {[...Array(bookSlots)].map((_, index) => {
            const book = allBooks[index];
            return (
              <div className="book-slot-wrapper" key={index}>
                <div
                  className={`book-slot ${book ? 'filled' : 'empty'}`}
                  onClick={() => handleBookClick(book)}
                >
                  {book ? (
                    <img
                      src={book.cover || book.imageUrls?.[0] || '/default-cover.png'}
                      alt={book.title}
                      className="book-cover"
                    />
                  ) : (
                    <div className="book-placeholder">＋</div>
                  )}
                </div>
                {book && <div className="book-title">{book.title}</div>}
              </div>
            );
          })}
        </div>

        <div className="button-group">
          <button className="book-btn" onClick={handleAddSlot}>＋</button>
          <button className="book-btn" onClick={handleRemoveSlot}>－</button>
        </div>
      </div>

      {selectedBook && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>Ｘ</button>
            <p>『{selectedBook.title}』 동화를 펼쳐볼까요?</p>
            <div className="modal-buttons">
              <button onClick={handleViewStory}>동화 보기</button>
              <button onClick={handleGoToQuiz}>퀴즈 풀기</button>
            </div>
          </div>
        </div>
      )}
    </Main>
  );
}

export default Library;

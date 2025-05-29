import React, { useState, useEffect } from 'react';
import Main from '../../components/Main';
import './storyprocess.css';
import { useNavigate } from 'react-router-dom';

const storyData = [
  {
    image: '/dogcatstory/dogcat1.png',
    text: '퍼퍼피와 키티는 놀이터에서 마주쳤습니다. 서로 처음 본 순간부터 누가 더 멋진지 경쟁하려고 했어요.',
  },
  {
    image: '/dogcatstory/dogcat2.png',
    text: '퍼퍼피는 멋지게 점프하며 달렸고, 키티는 가볍게 기둥을 타고 올라갔어요. 서로 지지 않으려 애쓰려했어요.',
  },
  {
    image: '/dogcatstory/dogcat3.png',
    text: '서서로 자기가 더 뛰어나다고 주장하며 말다툼을 하다가, 결국 마음이 상해 버리고 말았어요.',
  },
  {
    image: '/dogcatstory/dogcat4.png',
    text: '퍼퍼피는 짖으며 키티를 쫓았고, 키티는 등을 세우고 날카롭게 울었어요. 놀이터는 긴장감으로 가득 차고 있었지요.',
  },
  {
    image: '/dogcatstory/dogcat5.png',
    text: '싸싸우던 중 퍼피가 미끄러져 넘어졌고, 키티도 균형을 잃고 땅에 떨어졌어요. 둘 다 다친 건 아니었지만 당황했어요.',
  },
  {
    image: '/dogcatstory/dogcat6.png',
    text: '서서로를 쳐다보며 ‘이게 뭐 하는 짓이지?’ 하는 생각이 들었어요. 싸울 필요가 없다는 걸 깨닫게 되었지요.',
  },
  {
    image: '/dogcatstory/dogcat7.png',
    text: '퍼퍼피가 꼬리를 흔들며 먼저 다가가자, 키티도 살며시 발을 내밀었어요. 서로 웃으며 화해할 수 있었어요. 그 후 퍼피와 키티는 함께 놀이터를 뛰어다니며 즐겁게 놀았어요. 더 이상 경쟁하지 않고 친구가 되었죠.',
  },
];

function StoryProcess() {
  const [pageIndex, setPageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate(); 

  const current = storyData[pageIndex];

  useEffect(() => {
    let i = 0;
    let isMounted = true;
    setDisplayedText(''); // 초기화

    const interval = setInterval(() => {
      if (!isMounted) return;

      if (i >= current.text.length) {
        clearInterval(interval);
        return;
      }

      setDisplayedText((prev) => prev + current.text[i]);
      i++;
    }, 30);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
}, [pageIndex]);




  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };


  const handleNext = () => {
    if (pageIndex < storyData.length - 1) {
      setPageIndex(pageIndex + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleRestart = () => {
    setPageIndex(0);
    setShowModal(false);
  };

  const handleGoToQuiz = () => {
    navigate('/quiz');
  };

  return (
    <Main>
      <div className="story-process-container">
        <div className="story-image-box">
          <img
            src={current.image}
            alt={`스토리 이미지 ${pageIndex + 1}`}
            className="story-image"
          />
        </div>

        <div className="story-text-box">
          <div className="page-indicator">{pageIndex + 1} / {storyData.length}</div>

          <p className="story-text">{displayedText}</p>

          <div className="story-button-row">
            <button
              className="story-nav-btn"
              onClick={handlePrev}
              disabled={pageIndex === 0}
            >
              이전
            </button>
            <button
              className="story-nav-btn"
              onClick={handleNext}
            >
              다음
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>동화가 끝났어요! 다음으로 무엇을 할까요?</p>
            <div className="modal-buttons1">
              <button onClick={handleRestart}>다시 보기</button>
              <button onClick={handleGoToQuiz}>퀴즈 쏙!쏙!</button>
            </div>
          </div>
        </div>
      )}

    </Main>
  );
}

export default StoryProcess;
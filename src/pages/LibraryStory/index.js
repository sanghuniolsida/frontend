import React, { useState, useEffect } from 'react';
import Main from '../../components/Main';
import './librarystory.css'; 
import { useNavigate, useLocation } from 'react-router-dom';

function LibraryStory() {
  const navigate = useNavigate();
  const location = useLocation();

  const storyData = {
    '퍼피와 키티': {
      texts: [
        '퍼피와 키티는 놀이터에서 마주쳤습니다. 서로 처음 본 순간부터 누가 더 멋진지 경쟁하려고 했어요.',
        '퍼피는 멋지게 점프하며 달렸고, 키티는 가볍게 기둥을 타고 올라갔어요. 서로 지지 않으려 애쓰려했어요.',
        '서로 자기가 더 뛰어나다고 주장하며 말다툼을 하다가, 결국 마음이 상해 버리고 말았어요.',
        '퍼피는 짖으며 키티를 쫓았고, 키티는 등을 세우고 날카롭게 울었어요. 놀이터는 긴장감으로 가득 차고 있었지요.',
        '싸우던 중 퍼피가 미끄러져 넘어졌고, 키티도 균형을 잃고 땅에 떨어졌어요. 둘 다 다친 건 아니었지만 당황했어요.',
        '서로를 쳐다보며 ‘이게 뭐 하는 짓이지?’ 하는 생각이 들었어요. 싸울 필요가 없다는 걸 깨닫게 되었지요.',
        '퍼피가 꼬리를 흔들며 먼저 다가가자, 키티도 살며시 발을 내밀었어요. 서로 웃으며 화해할 수 있었어요. 그 후 퍼피와 키티는 함께 놀이터를 뛰어다니며 즐겁게 놀았어요. 더 이상 경쟁하지 않고 친구가 되었죠.',
      ],
      images: [
        '/dogcatstory/dogcat1.png',
        '/dogcatstory/dogcat2.png',
        '/dogcatstory/dogcat3.png',
        '/dogcatstory/dogcat4.png',
        '/dogcatstory/dogcat5.png',
        '/dogcatstory/dogcat6.png',
        '/dogcatstory/dogcat7.png',
      ]
    },
    '루루와 웃는 구름': {
      texts: [
        '어느 화창한 날, 토끼 루루는 좋아하는 당근을 찾으러 들판에 나섰어요. 햇님도 방긋, 나비도 팔랑이며 루루를 반겨주었죠. 루루는 오늘도 빨간 망토를 두르고 씩씩하게 걸어갔어요.',
        '루루는 당근을 들고 즐겁게 걷던 중, 하늘에 떠 있는 슬퍼 보이는 먹구름을 발견했어요. "앗, 저 구름은 왜 울 것 같지?" 루루는 걱정스러운 얼굴로 하늘을 올려다보았어요. 무슨 일이 있는 걸까, 루루는 궁금해졌어요.',
        '루루는 조심스럽게 다가가 말했어요. "안녕, 구름아! 무슨 일이 있었던 거야?" 구름은 조용히 눈물을 뚝뚝 흘리며 대답하지 않았어요. 루루는 걱정스러운 얼굴로 손을 흔들며 위로해 주었답니다.',
        '루루는 조용히 구름 곁에 서서 따뜻한 미소를 지었어요. 말은 하지 않았지만, 루루의 미소는 "괜찮아, 네 곁에 있을게"라는 말 같았죠. 구름은 조금씩 눈물을 멈추고 루루를 바라보았어요. 둘 사이엔 말 없이도 전해지는 따뜻한 마음이 있었답니다.',
        '루루의 따뜻한 마음 덕분에 구름의 얼굴에도 미소가 피어났어요. "이제 좀 나아졌어, 고마워 루루!" 구름은 말없이 고개를 끄덕이며 방긋 웃었죠. 루루도 기쁘게 웃으며 말했어요, "언제든 네 편이야!"',
        '구름은 반짝이는 빗방울을 뿌리며 하늘에 무지개를 걸었어요. 루루는 무지개를 보며 깡충깡충 뛰며 기뻐했어요. “와아! 구름아, 네 웃음이 이렇게 예쁜 선물을 주었구나!” 푸른 들판 위엔 웃음과 무지개가 가득 퍼졌답니다.',
        '무지개 아래, 다른 구름 친구들도 하나둘 모여들었어요. “루루야, 네가 우리 친구를 웃게 해줬구나!” 모든 구름이 밝은 미소를 지으며 함께 즐거워했어요. 루루는 기쁘게 손을 흔들며 하늘 친구들과 인사를 나눴답니다.',
        '루루는 무지개 아래에서 구름 친구들과 함께 손을 흔들었어요. "우리 언제든 또 만나자!" 루루가 외쳤지요. 하늘도, 들판도, 모두가 환하게 웃고 있었어요. 그날 루루는 따뜻한 마음이 세상을 환하게 만든다는 걸 배웠답니다.',
      ],
      images: [
        '/rabitcloud/rabitcloud1.png',
        '/rabitcloud/rabitcloud2.png',
        '/rabitcloud/rabitcloud3.png',
        '/rabitcloud/rabitcloud4.png',
        '/rabitcloud/rabitcloud5.png',
        '/rabitcloud/rabitcloud6.png',
        '/rabitcloud/rabitcloud7.png',
        '/rabitcloud/rabitcloud8.png',
      ]
    },
  };

  const book = location.state?.title || '퍼피와 키티';
  const story = storyData[book];

  const [pageIndex, setPageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const currentText = story.texts[pageIndex];
  const currentImage = story.images[pageIndex] || '/default-image.png';

  useEffect(() => {
    if (!currentText) {
      setDisplayedText('');
      return;
    }

    let i = 0;
    let isMounted = true;

    setDisplayedText(currentText[0]);

    const interval = setInterval(() => {
      if (!isMounted) return;

      i++;
      if (i >= currentText.length) {
        clearInterval(interval);
        return;
      }

      setDisplayedText((prev) => prev + currentText[i]);
    }, 30);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [currentText]);

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  const handleNext = () => {
    if (pageIndex < story.texts.length - 1) {
      setPageIndex(pageIndex + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleRestart = () => {
    setPageIndex(0);
    setShowModal(false);
  };

  const handleGoToLibrary = () => {
    navigate('/library');
  };

  if (!story) {
    return (
      <Main>
        <div className="library-story-container">
          <p>선택한 동화 데이터를 찾을 수 없습니다.</p>
        </div>
      </Main>
    );
  }

  return (
    <Main>
      <div className="library-story-container">
        <div className="library-image-box">
          <img
            src={currentImage}
            alt={`스토리 이미지 ${pageIndex + 1}`}
            className="library-image"
          />
        </div>

        <div className="library-text-box">
          <div className="library-page-indicator">{pageIndex + 1} / {story.texts.length}</div>
          <p className="library-text">{displayedText}</p>

          <div className="library-button-row">
            <button className="library-nav-btn" onClick={handlePrev} disabled={pageIndex === 0}>
              이전
            </button>
            <button className="library-nav-btn" onClick={handleNext}>
              다음
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="library-modal-overlay">
          <div className="library-modal-content">
            <p>동화가 끝났어요! 다시 보거나 책장으로 돌아가볼까요?</p>
            <div className="library-modal-buttons">
              <button onClick={handleRestart}>다시 보기</button>
              <button onClick={handleGoToLibrary}>책장으로</button>
            </div>
          </div>
        </div>
      )}
    </Main>
  );
}

export default LibraryStory;

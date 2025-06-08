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
    '화가 난 곰돌이': {
      texts: [
        '숲속 오두막에서 무무는 아침 햇살에 눈을 떴어요. 창밖은 맑고 새소리도 들리지만, 무무는 괜히 짜증이 나서 얼굴을 찌푸렸어요. 무슨 일이 있었던 걸까요?',
        '무무는 꽃을 심으려다 나무삽을 떨어뜨렸어요. 아무것도 아닌 일인데, 속에서 불이 확 치솟았죠. 무무는 삽을 발로 툭 차며 소리쳤어요. “아, 왜 이렇게 다 맘대로 안 되는 거야!”',
        '피피는 무무의 갑작스러운 행동에 깜짝 놀랐어요. 손에 들고 있던 꽃도 툭, 바닥에 떨어졌죠. 무무는 그제야 친구가 놀랐다는 걸 알아챘어요. 자신도 모르게 화를 낸 걸 깨달은 무무는 잠시 멈칫했어요.',
        '피피는 무무 앞에 조심스럽게 다가갔어요. “무무야, 괜찮아. 누구나 화날 때가 있어.” 무무는 눈을 깜빡이며 피피를 바라봤어요. 마음속에서 무언가 따뜻한 게 살짝 피어나는 기분이었어요.',
        '무무는 조용히 입을 열었어요. “아침부터 기분이 이상했어… 왜 그런지 나도 잘 몰랐어.” 피피는 고개를 끄덕이며 무무의 말을 가만히 들어주었어요. 처음으로 무무는 속에 있던 말을 꺼내기 시작했어요.',
        '피피는 부드럽게 말했어요. “무무야, 화내도 괜찮아. 그 마음을 말해줘서 고마워.” 무무는 처음 듣는 말에 눈을 깜빡였어요. 가슴 한쪽이 살짝 따뜻해지는 걸 느꼈죠.',
        '무무는 꽃을 살며시 집어 들며 말했어요. “이제 조금 괜찮아졌어.” 피피는 고개를 끄덕이며 웃었어요. 두 친구는 아무 말 없이, 그냥 함께 있는 것만으로도 기분이 좋아졌어요.',
        '무무는 피피와 함께 조심스럽게 꽃을 다시 심었어요. 이제는 마음이 한결 가벼워진 듯했죠. “다음엔 화가 나면 말할게,” 무무가 말했어요. 그리고 둘은 함께 웃으며, 다시 시작되는 하루를 맞이했어요.',
      ],
      images: [
        '/bear/bear1.png',
        '/bear/bear2.png',
        '/bear/bear3.png',
        '/bear/bear4.png',
        '/bear/bear5.png',
        '/bear/bear6.png',
        '/bear/bear7.png',
        '/bear/bear8.png',
      ]
    },
        '아기 달팽이 달록': {
      texts: [
        '푸른 숲속, 조용히 길을 걷는 달팽이 ‘달록’이 있었어요. 토끼와 다람쥐 친구들은 폴짝폴짝 뛰어가며 신나게 놀고 있었지요. 달록은 천천히 움직였지만, 얼굴에는 부드러운 미소가 있었어요. “나는 내 속도로 오늘도 여행을 떠나볼 거야!” 달록은 속삭였어요.',
        '하지만 숲속 친구들은 달록을 보며 웃기 시작했어요. “저 달팽이는 왜 이렇게 느려?” 다람쥐와 토끼가 킥킥대며 말했죠. 달록은 고개를 숙이고 조용히 멈춰 섰어요. 처음으로 ‘나는 너무 느린 걸까?’ 하는 생각이 들었답니다.',
        '달록은 조용히 혼자 길을 걸었어요. 다람쥐와 토끼는 저 멀리서 떠들며 앞서 나갔지요. 달록은 괜히 마음이 무거워졌어요. “내가 느리다고 해서 친구가 될 수 없는 걸까…” 달록은 속으로 중얼였어요.',
        '달록은 조용히 숲길을 걷다가 이상한 기운을 느꼈어요. 커다란 덤불 속에서 반짝이는 눈 두 개가 그를 지켜보고 있었죠. “어… 저건 뭐지?” 달록은 살짝 멈춰서 긴장했어요. 주변은 조용했지만, 마음속엔 작은 두려움이 스며들었어요.',
        '달록이 용기를 내어 덤불 가까이 다가가자, 안에서 작은 새 한 마리가 나왔어요. 날개에 커다란 나뭇잎을 두른 새는 다친 듯 보였어요. “괜찮아? 무서웠지?” 달록이 조심스럽게 물었어요. 새는 깜짝 놀라다가, 고개를 끄덕이며 작게 말했어요. “응… 고마워…”',
        '달록은 천천히 새 옆에 앉아 이야기를 들어주었어요. 새는 날개가 아파서 날 수 없었다며 무서워서 숨었다고 말했죠. “괜찮아, 나랑 같이 천천히 가보자,” 달록이 말했어요. 작은 새는 처음으로 안심한 듯 살며시 미소 지었어요.',
        '달록과 새는 나란히 천천히 숲길을 걸었어요. 느린 걸음이었지만, 둘에게는 그게 딱 좋았어요. “혼자였으면 무서웠을 텐데, 너랑 있어서 괜찮아,” 새가 말했어요. 달록은 조용히 고개를 끄덕이며 미소 지었답니다.',
        '햇살 가득한 길 끝에서, 달록과 새는 함께 웃었어요. 빠르지도, 느리지도 않은 딱 좋은 속도였죠. “친구가 있다는 건 참 따뜻한 일이야,” 새가 말했어요. 달록도 말했어요. “천천히 가도 괜찮아. 함께라면 충분해.”',        
      ],
      images: [
        '/snail/snail1.png',
        '/snail/snail2.png',
        '/snail/snail3.png',
        '/snail/snail4.png',
        '/snail/snail5.png',
        '/snail/snail6.png',
        '/snail/snail7.png',
        '/snail/snail8.png',
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

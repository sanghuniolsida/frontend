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
       '숲속 친구들': {
      texts: [
        '숲속 놀이터는 오늘도 시끌벅적했어요. 친구들이 웃고 떠들며 뛰어놀고 있었지요. 다람쥐는 미끄럼틀에서 내려오며 크게 웃었고, 토끼는 그네에 조용히 앉아 하늘을 올려다보았어요.',
        '곰이 공을 들고 토끼 쪽으로 다가갔어요. “야, 너 여기서 뭐 해?” 곰이 말했어요. 토끼는 말없이 고개만 숙였지요. 다람쥐는 멀리서 그 모습을 조용히 바라보고 있었어요.',
        '“이 공 받아 봐!” 곰이 갑자기 소리쳤어요. 토끼는 깜짝 놀라 그네에 꼭 붙어 앉았지요. 곰은 웃고 있었지만, 토끼는 점점 더 무서워졌어요. 그 모습을 본 다람쥐의 눈이 점점 커졌어요.',
        '“그만해, 곰!” 다람쥐가 크게 외쳤어요. 곰은 깜짝 놀라 멈춰 섰고, 공을 꼭 쥔 손을 내렸지요. “토끼는 지금 무서워하고 있어.” 다람쥐의 눈빛은 누구보다 진지했어요.',
        '곰은 공을 꼭 쥔 채 한참 말이 없었어요. “난 그냥 장난친 건데…” 곰이 작게 말했지요. 다람쥐는 부드럽게 말했어요. “토끼는 무서웠대. 우리, 서로 기분을 생각하자.”',
        '곰은 고개를 푹 숙였어요. “미안해… 장난이었는데, 널 무섭게 했구나.” 토끼는 조용히 고개를 끄덕였어요. 다람쥐는 작게 웃으며 두 친구를 바라보았지요.',
        '곰도 조심스럽게 고개를 들었어요. 토끼는 작게 미소 지었고, 다람쥐는 활짝 웃었지요. 세 친구는 아무 말 없이도 서로의 마음을 느낄 수 있었어요. 놀이터에는 다시 햇살 같은 웃음이 퍼졌어요.',
        '세 친구는 나란히 손을 잡고 놀이터를 걸어갔어요. “같이 놀자!” 곰이 말했고, 토끼도 미소 지었지요. 다람쥐는 조용히 고개를 끄덕였어요. 이제, 그들은 진짜 친구가 되었어요.',
      ],
      images: [
        '/friendprotect/friendprotect1.png',
        '/friendprotect/friendprotect2.png',
        '/friendprotect/friendprotect3.png',
        '/friendprotect/friendprotect4.png',
        '/friendprotect/friendprotect5.png',
        '/friendprotect/friendprotect6.png',
        '/friendprotect/friendprotect7.png',
        '/friendprotect/friendprotect8.png',
      ]
    },
        '숲속 유치원': {
      texts: [
        '숲속 유치원에는 오늘도 동물 친구들이 모였어요. “안녕~!” 원숭이는 아기 코끼리 옆을 팔짝팔짝 뛰며 인사했어요. 코끼리는 천천히 고개를 끄덕이며 웃었지요. 모두가 다 같은 속도로 움직이는 건 아니에요.',
        '“이따가 그네 타자! 그리고 모래놀이도 하고, 미끄럼틀도 타자!” 원숭이는 빠르게 말하며 신이 났어요. 코끼리는 조심스럽게 말하려 했지만, 입을 열기도 전에 원숭이는 벌써 딴 데를 보고 있었지요.',
        '코끼리는 조심스럽게 입을 열었어요. “나도... 그네... 타고 싶...” 하지만 원숭이는 이미 저 멀리 뛰어가고 있었지요. 코끼리의 말은 끝까지 닿지 못했어요.',
        '원숭이는 벌써 저 멀리 달려가고 있었어요. 코끼리는 아무 말도 하지 못한 채, 그 자리에 가만히 서 있었지요. 입을 열었지만, 마음은 닿지 않았어요.',
        '코끼리는 조용히 서 있었어요. 그때, 모래밭에 있던 병아리가 조심조심 다가와 고개를 갸웃했지요. “괜찮아?” 작은 목소리가 들렸어요.',
        '코끼리는 입을 천천히 열었어요. “응… 나는… 그냥…” 병아리는 조용히 기다려 주었지요. 그렇게, 둘은 서로를 바라보았어요.',
        '코끼리의 말이 끝났을 때, 멀리서 놀던 친구들이 하나둘 다가왔어요. 다람쥐, 토끼, 여우는 말없이 옆에 섰고, 원숭이도 천천히 걸음을 멈추었어요.',
        '코끼리는 천천히 웃으며 말했어요. “나는... 천천히 말해. 그래도 같이 놀고 싶어.” 원숭이는 고개를 끄덕였어요. 모두 함께 둥글게 앉아, 천천히 웃으며 놀았답니다.',
      ],
        images: [
          '/slowspeak/slowspeak1.png',
          '/slowspeak/slowspeak2.png',
          '/slowspeak/slowspeak3.png',
          '/slowspeak/slowspeak4.png',
          '/slowspeak/slowspeak5.png',
          '/slowspeak/slowspeak6.png',
          '/slowspeak/slowspeak7.png',
          '/slowspeak/slowspeak8.png',
        ]
    },
          '친구가 필요해': {
        texts: [
          '하얀 나라, 눈으로 덮인 들판에 크고 하얀 북극곰 한 마리가 살았어요. 곰은 늘 혼자였지만, 친구들과 놀고 싶었답니다. 그저 멀리서 바라보기만 했어요.',
          '북극곰은 조심스럽게 다가가 보았어요. 하지만 친구들은 놀라며 도망쳐 버렸죠. “내가 너무 커서 그런 걸까?”  곰은 그 자리에 멈춰 섰어요.',
          '“나는 그냥… 같이 놀고 싶었는데…” 북극곰은 앞발로 눈을 톡톡 건드렸어요. 친구들의 웃음소리는 멀리서 들렸지만, 곰은 등을 돌리고 조용히 앉아 있었어요.',
          '곰은 작은 눈사람을 만들어 조심스럽게 놔두었어요. “이걸 보면 조금은… 웃을 수 있을까?” 곰은 아무 말도 없이 조용히 돌아섰어요. 하얀 눈 위엔 커다란 발자국만 남았답니다.',
          '“이거… 누가 만든 거지?” 토끼가 속삭였어요. 다람쥐는 조심스럽게 눈사람을 쓰다듬었고, 여우는 눈길 위에 남은 커다란 발자국을 따라 눈을 돌렸어요.',
          '“곰이 우리한테 주고 간 거야.” 토끼는 작게 말하며 눈길을 바라보았어요. 다람쥐와 여우도 조심스럽게 고개를 끄덕였죠. “우리… 곰한테 가 보자.”',
          '북극곰은 오늘도 혼자 앉아 있었어요. 그런데 멀리서 발소리가 들렸죠. 고개를 든 곰은 눈을 동그랗게 떴어요. “어… 오는 거야…?”',
          '“곰아, 우리랑 같이 놀자!” 친구들이 말하자, 북극곰은 조용히 웃으며 고개를 끄덕였어요. 눈밭 위에는 웃음소리가 퍼졌고, 그날부터 북극곰은 혼자가 아니었답니다.',
        ],
          images: [
            '/friendbear/friednbear1.png',
            '/friendbear/friednbear2.png',
            '/friendbear/friednbear3.png',
            '/friendbear/friednbear4.png',
            '/friendbear/friednbear5.png',
            '/friendbear/friednbear6.png',
            '/friendbear/friednbear7.png',
            '/friendbear/friednbear8.png'
          ]
      }
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

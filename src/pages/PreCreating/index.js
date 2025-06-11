import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/Main';
import '../../components/Main.css';
import '../Creating/Creating.css';

function PreCreatingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const subject = localStorage.getItem('secondHalfSubject');
      const stored = localStorage.getItem('midPartStory');

      if (subject && stored) {
        const parsed = JSON.parse(stored);

        if (subject === '곰은 멈춰 서서 조용히 자신의 행동을 되돌아봐요.') {
          parsed.secondHalfResultStory = [
            '곰은 공을 꼭 쥔 채 한참 말이 없었어요. “난 그냥 장난친 건데…” 곰이 작게 말했지요. 다람쥐는 부드럽게 말했어요. “토끼는 무서웠대. 우리, 서로 기분을 생각하자.”',
            '곰은 고개를 푹 숙였어요. “미안해… 장난이었는데, 널 무섭게 했구나.” 토끼는 조용히 고개를 끄덕였어요. 다람쥐는 작게 웃으며 두 친구를 바라보았지요.',
            '곰도 조심스럽게 고개를 들었어요. 토끼는 작게 미소 지었고, 다람쥐는 활짝 웃었지요. 세 친구는 아무 말 없이도 서로의 마음을 느낄 수 있었어요. 놀이터에는 다시 햇살 같은 웃음이 퍼졌어요.',
            '세 친구는 나란히 손을 잡고 놀이터를 걸어갔어요. “같이 놀자!” 곰이 말했고, 토끼도 미소 지었지요. 다람쥐는 조용히 고개를 끄덕였어요. 이제, 그들은 진짜 친구가 되었어요.',
          ];
          parsed.imageUrls.push(
            '/friendprotect/friendprotect5.png',
            '/friendprotect/friendprotect6.png',
            '/friendprotect/friendprotect7.png',
            '/friendprotect/friendprotect8.png'
          );
        }

        else if (subject === '작은 병아리가 다가와 조용히 말을 걸어요.') {
          parsed.secondHalfResultStory = [
            '코끼리는 조용히 서 있었어요. 그때, 모래밭에 있던 병아리가 조심조심 다가와 고개를 갸웃했지요. “괜찮아?” 작은 목소리가 들렸어요.',
            '코끼리는 입을 천천히 열었어요. “응… 나는… 그냥…” 병아리는 조용히 기다려 주었지요. 그렇게, 둘은 서로를 바라보았어요.',
            '코끼리의 말이 끝났을 때, 멀리서 놀던 친구들이 하나둘 다가왔어요. 다람쥐, 토끼, 여우는 말없이 옆에 섰고, 원숭이도 천천히 걸음을 멈추었어요.',
            '코끼리는 천천히 웃으며 말했어요. “나는... 천천히 말해. 그래도 같이 놀고 싶어.” 원숭이는 고개를 끄덕였어요. 모두 함께 둥글게 앉아, 천천히 웃으며 놀았답니다.',
          ];
          parsed.imageUrls.push(
            '/slowspeak/slowspeak5.png',
            '/slowspeak/slowspeak6.png',
            '/slowspeak/slowspeak7.png',
            '/slowspeak/slowspeak8.png'
          );
        }

        else if (subject === '친구들이 곰을 찾아가 함께 놀자고 해요') {
          parsed.secondHalfResultStory = [
            '“이거… 누가 만든 거지?” 토끼가 속삭였어요. 다람쥐는 조심스럽게 눈사람을 쓰다듬었고, 여우는 눈길 위에 남은 커다란 발자국을 따라 눈을 돌렸어요.',
            '“곰이 우리한테 주고 간 거야.” 토끼는 작게 말하며 눈길을 바라보았어요. 다람쥐와 여우도 조심스럽게 고개를 끄덕였죠. “우리… 곰한테 가 보자.”',
            '북극곰은 오늘도 혼자 앉아 있었어요. 그런데 멀리서 발소리가 들렸죠. 고개를 든 곰은 눈을 동그랗게 떴어요. “어… 오는 거야…?”',
            '“곰아, 우리랑 같이 놀자!” 친구들이 말하자, 북극곰은 조용히 웃으며 고개를 끄덕였어요. 눈밭 위에는 웃음소리가 퍼졌고, 그날부터 북극곰은 혼자가 아니었답니다.',
          ];
          parsed.imageUrls.push(
            '/friendbear/friednbear5.png',
            '/friendbear/friednbear6.png',
            '/friendbear/friednbear7.png',
            '/friendbear/friednbear8.png'
          );
        }

        else if (subject === '달빛 조각을 친구들에게 나눠주고 싶어요') {
          parsed.secondHalfResultStory = [
            '고슴도치는 달빛 조각 하나를 부엉이에게 건넸어요. “어두운 밤길을 밝히는 데 도움이 될 거야!” 부엉이는 살짝 놀란 표정으로 고슴도치를 바라보았죠. 곧, 얼굴 가득 미소가 번졌어요.',
            '부엉이는 감동한 얼굴로 달빛 조각을 품에 안았어요. “이건 정말 특별한 선물이야…” 고슴도치는 부끄럽게 웃으며 말했죠. “빛은 함께 나눌 때 더 밝아지니까!”',
            '고슴도치는 가방을 열어 달빛 조각을 나눠주었어요. 부엉이, 토끼, 너구리는 조심스럽게 그것을 받아 들었죠. “이 빛, 마음까지 따뜻해지는 것 같아.” 모두의 눈빛에 환한 미소가 번졌어요.',
            '달빛 아래, 고슴도치와 친구들은 둘러앉았어요. 모두 손에 하나씩, 반짝이는 달빛 조각을 들고 있었죠. “이건 이제 우리만의 빛이야.” 숲속은 말없이, 그 따뜻한 빛을 감싸 안았어요.',
          ];
          parsed.imageUrls.push(
            '/hedgehog/hedgehog5.png',
            '/hedgehog/hedgehog6.png',
            '/hedgehog/hedgehog7.png',
            '/hedgehog/hedgehog8.png'
          );
        }

        localStorage.setItem('midPartStory', JSON.stringify(parsed));
      }

      navigate('/predefined');
    }, 12000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="app-wrapper">
      <Main>
        <main className="main-scroll">
          <div className="creating-page">
            <div className="creating-content">
              <div className="icon-circle">
                <img
                  src="/Creating.png"
                  alt="동화 제작 중 아이콘"
                  className="creating-icon"
                />
              </div>
              <div className="creating-text">
                동화 제작중
                <span className="dot dot1">.</span>
                <span className="dot dot2">.</span>
                <span className="dot dot3">.</span>
              </div>
            </div>
          </div>
        </main>
      </Main>
    </div>
  );
}

export default PreCreatingPage;

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

        else if (subject === '누군가에게 조심스레 나눠보기로 해요.') {
          parsed.secondHalfResultStory = [
            '토치는 조심스레 조각 하나를 들고 부엉이에게 다가갔어요. 부엉이는 살짝 놀란 듯 눈을 껌뻑였죠. “이거... 받아볼래?” 토치가 말했어요. 떨리는 마음을 꾹 눌러 담은 용기였어요.',
            '달빛 조각이 부엉이의 날개 끝에 닿자, 그 눈에 반짝임이 돌아왔어요. 차가웠던 마음속 어둠이 살며시 녹아내렸죠. 부엉이는 처음으로 토치에게 고개를 끄덕였답니다.',
            '토치와 부엉이는 함께 숲을 걸으며 조각들을 나누었어요. 다람쥐, 사슴, 여우… 친구들의 얼굴에 빛이 퍼졌죠. 달빛 조각이 손에서 손으로 전해졌어요. 어둠이 걷히고, 숲은 따스한 빛으로 가득 찼답니다.',
            '숲이 은은한 달빛으로 물든 그 밤, 토치는 다시 고개를 들어 하늘을 바라보았어요. 이젠 혼자가 아니었어요. 곁엔 빛을 함께 나눈 친구들이 있었죠.',
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

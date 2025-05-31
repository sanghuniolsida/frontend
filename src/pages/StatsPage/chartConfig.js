// 공통 차트 설정 및 통계 데이터
export const stats = [
  { label: '이해력', value: 7 },
  { label: '기억력', value: 5 },
  { label: '주의\n집중력', value: 8 },
  { label: '언어\n추론력', value: 6 },
];

export const radarData = {
  labels: stats.map((s) => s.label),
  datasets: [
    {
      label: '능력치',
      data: stats.map((s) => s.value * 10),
      backgroundColor: 'rgba(246,223,123,0.2)',
      borderColor: '#F6DF7B',
      borderWidth: 2,
      fill: true,
    },
  ],
};

export const radarOptions = {
  maintainAspectRatio: false,
  layout: { padding: { top: 20, bottom: 20, left: 20, right: 20 } },
  scales: {
    r: {
      min: 0,
      max: 100,
      grid: { color: '#eee' },
      ticks: { display: false },
      pointLabels: {
        color: '#333',
        font: { size: 8 },
        padding: 10,
        callback: (label, index) => {
          const clean = label.replace(/\n/g, '');
          // 기억력(1)과 언어추론력(3)은 배열로 반환해 세로 표시
          if (index === 1 || index === 3) {
            return clean.split('');
          }
          // 나머지는 가로 문자열로 표시
          return clean;
        },
      },
    },
  },
  plugins: { legend: { display: false } },
};

export const stats = [
  { key: '이해력', label: '이해력', value: 0 },
  { key: '기억력', label: '기억력', value: 0 },
  { key: '주의 집중력', label: '주의 집중력', value: 0 },
  { key: '사고력', label: '사고력', value: 0 },
];

// 레이더 차트 옵션 설정
export const radarOptions = {
  maintainAspectRatio: false,
  layout: {
    padding: { top: 20, bottom: 20, left: 20, right: 20 },
  },
  scales: {
    r: {
      min: 0,
      max: 100,
      grid: { color: '#eee' },
      ticks: { display: false },
      pointLabels: {
        color: '#333',
        font: { size: 10 },
        padding: 10,
        callback: (label, index) => {
          const clean = label.replace(/\n/g, '');
          // 기억력(1)과 언어추론력(3)은 세로로 출력되게 배열로 반환
          if (index === 1 || index === 3) {
            return clean.split('');
          }
          // 나머지는 가로 문자열로 출력
          return clean;
        },
      },
    },
  },
  plugins: {
    legend: { display: false },
  },
};

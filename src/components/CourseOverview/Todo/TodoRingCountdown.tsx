import type { ReactNode } from 'react';

function getColorByPercent(percent: number): string {
  if (percent > 66) return '#00ff88'; // 綠
  if (percent > 33) return '#ffcc00'; // 黃
  if (percent > 0) return '#ff4444'; // 紅
  return '#800080';
}

type Props = {
  percent: number;
  children?: ReactNode;
};

function TodoRingCountdown({ percent, children }: Props) {
  const radius = 150;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference * (percent / 100);
  const color = getColorByPercent(percent);

  console.log(percent);

  return (
    <div>
      <svg width="300" height="300">
        <circle
          stroke="#f0f0f0"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="150"
          cy="150"
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx="150"
          cy="150"
          transform="rotate(-90 150 150)"
        />
      </svg>
      {children && <div>{children}</div>}
    </div>
  );
}

export default TodoRingCountdown;

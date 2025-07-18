import type { ReactNode } from 'react';

function getColorByPercent(percent: number): string {
  const clamped = Math.max(0, Math.min(100, percent)); // 限制在 0-100
  const hue = (clamped * 120) / 100; // 0 = 紅, 120 = 綠
  return `hsl(${hue}, 100%, 50%)`; // 飽和度100%，亮度50%
}

type Props = {
  percent: number;
  children?: ReactNode;
};

function RingCountdown({ percent, children }: Props) {
  const radius = 150;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference * (percent / 100);
  const color = getColorByPercent(percent);

  console.log(percent);

  return (
    <div
      style={{
        position: 'relative',
        width: 300,
        height: 300,
        display: 'inline-block',
        margin: 8,
      }}
    >
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
          style={{
            transition: 'stroke-dashoffset 0.5s ease, stroke 0.5s ease',
          }}
        />
      </svg>
      {children && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default RingCountdown;

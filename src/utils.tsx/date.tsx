import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export function getTodayDateLocal(): string {
  return dayjs().format('YYYY-MM-DDTHH:mm');
}
export function getTomorrowEndOfDayLocal(): string {
  return dayjs()
    .add(1, 'day')
    .hour(23)
    .minute(59)
    .second(59)
    .format('YYYY-MM-DDTHH:mm');
}

export function getDateAfterWeek(): string {
  return dayjs()
    .add(7, 'day')
    .format('YYYY-MM-DD');
}

export function getRemainingPercent(todo: {
  start: string;
  end: string;
}): number {
  const now = dayjs();
  const start = dayjs(todo.start);
  const end = dayjs(todo.end);

  const total = end.diff(start);
  const left = end.diff(now);

  if (total <= 0) return 0;
  const percent = (left / total) * 100;
  return Math.max(0, Math.min(100, percent));
}

export function getLeftTime(left: number): string {
  const duration = dayjs.duration(left);
  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();
  if (days > 0)
    return (`剩餘時間: ${days}天${hours}小時${minutes}分鐘`)
  if (hours > 0)
    return (`剩餘時間: ${hours}小時${minutes}分鐘`)
  if (minutes > 0)
    return(`剩餘時間: ${minutes}分鐘`)
  if (left >= 0)
    return ('剩餘時間: 小於一分鐘')
  return ('已到期')
}

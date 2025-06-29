import dayjs from 'dayjs';

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

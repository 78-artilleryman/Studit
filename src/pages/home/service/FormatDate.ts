import dayjs, { Dayjs } from 'dayjs';

interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

// Timestamp를 Dayjs로 변환하는 함수
const timestampToDayjs = (timestamp: Timestamp): Dayjs => {
  const milliseconds: number = timestamp?.seconds * 1000 + Math.floor(timestamp?.nanoseconds / 1000000);
  return dayjs(milliseconds);
};

// 오늘 날짜를 Dayjs로 가져오는 함수
const getToday = (): Dayjs => {
  return dayjs();
};

export const formatDate = (timestamp: Timestamp): string => {
  const milliseconds: number = timestamp?.seconds * 1000 + Math.floor(timestamp?.nanoseconds / 1000000);
  const date = dayjs(milliseconds);

  return date.format('YYYY-MM-DD');
};

export function convertTimestampToDayjs(timestamp: Timestamp) {
  const { seconds, nanoseconds } = timestamp;
  const milliseconds = seconds * 1000 + nanoseconds / 1000000; // Timestamp를 밀리초 단위로 변환
  const date = new Date(milliseconds); // JavaScript의 Date 객체로 변환
  return dayjs(date); // dayjs로 변환하여 반환
}

// postDeadline과 오늘 날짜를 비교하여 오늘로부터 3일 이내인지 여부를 반환하는 함수
export const isWithin3Days = (postDeadlineTimestamp: Timestamp): boolean => {
  const postDeadline: Dayjs = timestampToDayjs(postDeadlineTimestamp);
  const today: Dayjs = getToday();

  // postDeadline이 오늘보다 이후이고, 오늘로부터 3일 이내인 경우 true 반환
  return postDeadline.isAfter(today) && postDeadline.diff(today, 'day') <= 3;
};

export const deadLine = (postDeadlineTimestamp: Timestamp): boolean => {
  const checkDate: Dayjs = timestampToDayjs(postDeadlineTimestamp);
  const today: Dayjs = getToday();

  return checkDate.isBefore(today);
};

// 공통 상수들

// API 엔드포인트
export const API_ENDPOINTS = {
  QUESTIONS: '/api/questions',
  ANSWERS: '/api/answers',
  UPLOAD: '/api/upload',
} as const;

// 앱 설정
export const APP_CONFIG = {
  MAX_VIDEO_SIZE: 100 * 1024 * 1024, // 100MB
  SUPPORTED_VIDEO_FORMATS: ['mp4', 'webm', 'mov'],
  RECENT_ANSWERS_COUNT: 4,
} as const;

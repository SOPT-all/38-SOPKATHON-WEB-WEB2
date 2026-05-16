// 공통 타입 정의들

// 질문 관련 타입
export interface Question {
  id: string;
  content: string;
  date: string;
}

// 답변 관련 타입
export interface Answer {
  id: string;
  questionId: string;
  videoUrl: string;
  createdAt: string;
  author: 'parent' | 'child';
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

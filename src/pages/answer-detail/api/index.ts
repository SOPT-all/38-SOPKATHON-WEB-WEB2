import { publicInstance } from '@/shared/api/axios';

export type Role = 'PARENT' | 'CHILD';

export interface AnswerInfo {
  role: Role;
  videoUrl: string;
  answeredAt: string;
  isMine: boolean;
}

export interface AnswerDetail {
  roomQuestionId: number;
  question: string;
  completedAt: string;
  answers: AnswerInfo[];
}

interface AnswerDetailResponse {
  success: boolean;
  data: AnswerDetail;
  error: { code: number; message: string } | null;
}

const BROWSER_TOKEN_KEY = 'browserToken';

const getBrowserToken = (): string => {
  const token = localStorage.getItem(BROWSER_TOKEN_KEY);
  if (!token) throw new Error('browserToken이 localStorage에 없습니다');
  return token;
};

export const getAnswerDetail = async (
  id: string,
): Promise<AnswerDetail | null> => {
  const token = getBrowserToken();
  const { data } = await publicInstance.get<AnswerDetailResponse>(
    `/api/records/${id}`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return data.data;
};

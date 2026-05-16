import { publicInstance } from '@/shared/api/axios';

interface PostAnswerRequest {
  roomQuestionId: number;
  videoKey: string;
}

interface AnswerData {
  answerId: number;
  roomQuestionId: number;
  videoKey: string;
  isUnlocked: boolean;
  currentStreakDay: number;
  currentStreakMessage: string;
  createdAt: string;
}

interface PostAnswerResponse {
  success: boolean;
  data: AnswerData;
  error: { code: number; message: string } | null;
}

const BROWSER_TOKEN_KEY = 'browserToken';

const getBrowserToken = (): string => {
  const token = localStorage.getItem(BROWSER_TOKEN_KEY);
  if (!token) throw new Error('browserToken이 localStorage에 없습니다');
  return token;
};

export const postAnswer = async (
  request: PostAnswerRequest,
): Promise<AnswerData> => {
  const token = getBrowserToken();
  const { data } = await publicInstance.post<PostAnswerResponse>(
    '/api/answers',
    request,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return data.data;
};

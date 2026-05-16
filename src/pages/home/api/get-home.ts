import { type ServerUserRole } from '@/pages/home/types';
import { publicInstance } from '@/shared/api/axios';

interface HomeProgress {
  currentStep: 1 | 2 | 3 | 4;
  message: string;
  totalStep: number;
}

interface TodayQuestion {
  answered: boolean;
  content: string;
  roomQuestionId: number;
}

export interface GetHomeData {
  progress: HomeProgress;
  selectedMode: ServerUserRole;
  statusMessage: string;
  todayQuestion: TodayQuestion;
}

interface GetHomeResponse {
  data: GetHomeData;
  error: {
    code: number;
    message: string;
  } | null;
  success: boolean;
}

export const getHome = async (
  browserToken: string,
): Promise<GetHomeResponse> => {
  const { data } = await publicInstance.get<GetHomeResponse>('/api/home', {
    headers: {
      Authorization: `Bearer ${browserToken}`,
    },
  });

  return data;
};

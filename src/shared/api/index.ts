import { privateInstance } from '@/shared/api/axios';

export interface HomeData {
  selectedMode: string;
  statusMessage: string;
  progress: {
    currentStep: number;
    totalStep: number;
    message: string;
  };
  todayQuestion: {
    roomQuestionId: number;
    content: string;
    answered: boolean;
  };
}

export const getHome = async (): Promise<HomeData> => {
  const browserToken = localStorage.getItem('browserToken') ?? '';
  const res = await privateInstance.get('/api/home', {
    headers: { Authorization: browserToken },
  });
  return res.data as HomeData;
};

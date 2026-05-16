import { useEffect, useState } from 'react';

import { getHome, type HomeData } from '@/pages/home/api';

export const useAnswerProgress = () => {
  const [data, setData] = useState<HomeData | null>(null);

  useEffect(() => {
    void getHome()
      .then((res) => setData(res))
      .catch(() => {});
  }, []);

  return {
    bubbleText: data?.statusMessage ?? '',
    currentStep: data?.progress.currentStep ?? 0,
    title: data?.progress.message ?? '',
    hasAnsweredToday: data?.todayQuestion.answered ?? false,
    todayQuestion: data?.todayQuestion ?? null,
  };
};

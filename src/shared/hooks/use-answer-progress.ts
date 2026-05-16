import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getHome, type GetHomeData } from '@/pages/home/api/get-home';
import { type AnswerStep, type UserRole } from '@/pages/home/types';
import { getStoredBrowserToken } from '@/pages/home/utils/home-session';
import { serverRoleToUserRole } from '@/pages/home/utils/role';
import {
  getStoredUserRole,
  setStoredUserRole,
} from '@/pages/home/utils/user-role-storage';
import { routePath } from '@/routes/path';

interface UseAnswerProgressReturn {
  bubbleText: string;
  currentStep: AnswerStep;
  hasAnsweredToday: boolean;
  question: string;
  roomQuestionId: number;
  title: string;
  userRole: UserRole;
}

interface AnswerProgressState {
  bubbleText: string;
  currentStep: AnswerStep;
  hasAnsweredToday: boolean;
  question: string;
  roomQuestionId: number;
  title: string;
  userRole: UserRole;
}

const initialAnswerProgressState: AnswerProgressState = {
  bubbleText: '답장을 받지 못해 멀어지는 중이에요..',
  currentStep: 1,
  hasAnsweredToday: false,
  question: '가장 행복했던 순간은 언제인가요?',
  roomQuestionId: 0,
  title: '아직은 머뭇거리는 중이에요.',
  userRole: getStoredUserRole(),
};

const getAnswerProgressState = ({
  progress,
  selectedMode,
  statusMessage,
  todayQuestion,
}: GetHomeData): AnswerProgressState => {
  const userRole = serverRoleToUserRole(selectedMode);

  return {
    bubbleText: statusMessage,
    currentStep: progress.currentStep,
    hasAnsweredToday: todayQuestion.answered,
    question: todayQuestion.content,
    roomQuestionId: todayQuestion.roomQuestionId,
    title: progress.message,
    userRole,
  };
};

export const useAnswerProgress = (): UseAnswerProgressReturn => {
  const navigate = useNavigate();
  const [answerProgress, setAnswerProgress] = useState<AnswerProgressState>(
    initialAnswerProgressState,
  );

  useEffect(() => {
    void (async () => {
      try {
        const response = await getHome(getStoredBrowserToken());
        const nextAnswerProgress = getAnswerProgressState(response.data);

        setAnswerProgress(nextAnswerProgress);
        setStoredUserRole(nextAnswerProgress.userRole);
        console.log('홈 조회 API 요청 성공', response);
      } catch (error) {
        console.error('홈 조회 API 요청 실패', error);
        alert('상대방이 아직 접속하지 않았어요');
        void navigate(routePath.ONBOARDING, { replace: true });
      }
    })();
  }, [navigate]);

  return answerProgress;
};

import { type AnswerStep, type UserRole } from '@/pages/home/types';
import { getStoredUserRole } from '@/pages/home/utils/user-role-storage';

interface UseAnswerProgressReturn {
  bubbleText: string;
  currentStep: AnswerStep;
  hasAnsweredToday: boolean;
  title: string;
  userRole: UserRole;
}

const stepTitleByStep: Record<AnswerStep, string> = {
  1: '아직은 머뭇거리는 중이에요.',
  2: '한 걸음씩 다가가는 중이에요.',
  3: '거리가 좁혀지고 있어요!',
  4: '드디어 맞닿았어요!',
};

const answeredBubbleText = '오늘도 선뜻 다가가볼까요?';
const unansweredBubbleText = '답장을 받지 못해 멀어지는 중이에요..';

export const useAnswerProgress = (): UseAnswerProgressReturn => {
  // TODO: 홈 조회 API 연결 후 응답 값으로 교체
  const currentStep: AnswerStep = 1;
  const hasAnsweredToday = false;
  const userRole: UserRole = getStoredUserRole();

  return {
    bubbleText: hasAnsweredToday ? answeredBubbleText : unansweredBubbleText,
    currentStep,
    hasAnsweredToday,
    title: stepTitleByStep[currentStep],
    userRole,
  };
};

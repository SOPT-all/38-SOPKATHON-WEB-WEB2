import {
  type AnswerStep,
  mockAnswerProgress,
  type UserRole,
} from '@/shared/mocks/answer-progress.mock';

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
  const { currentStep, hasAnsweredToday, userRole } = mockAnswerProgress;

  return {
    bubbleText: hasAnsweredToday ? answeredBubbleText : unansweredBubbleText,
    currentStep,
    hasAnsweredToday,
    title: stepTitleByStep[currentStep],
    userRole,
  };
};

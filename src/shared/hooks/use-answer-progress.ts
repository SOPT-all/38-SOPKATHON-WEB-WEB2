import { useEffect, useState } from 'react';

type AnswerStep = 1 | 2 | 3 | 4;

interface UseAnswerProgressReturn {
  bubbleText: string;
  completeAnswer: () => void;
  currentStep: AnswerStep;
  hasAnsweredToday: boolean;
  resetAnswerProgress: () => void;
  title: string;
}

const answerStepStorageKey = 'answerStep';
const answeredDateStorageKey = 'answeredDate';
const answerProgressChangeEvent = 'answer-progress-change';

const stepTitleByStep = {
  1: '아직은 머뭇거리는 중이에요.',
  2: '한 걸음씩 다가가는 중이에요.',
  3: '거리가 좁혀지고 있어요!',
  4: '드디어 맞닿았어요!',
} as const;

const answeredBubbleText = '오늘도 선뜻 다가가볼까요?';
const unansweredBubbleText = '답장을 받지 못해 멀어지는 중이에요..';

const getTodayKey = () => new Date().toISOString().slice(0, 10);

const isAnswerStep = (value: number): value is AnswerStep =>
  value >= 1 && value <= 4 && Number.isInteger(value);

const getStoredAnswerStep = (): AnswerStep => {
  const storedStep = Number(localStorage.getItem(answerStepStorageKey));

  return isAnswerStep(storedStep) ? storedStep : 1;
};

const getHasAnsweredToday = (): boolean =>
  localStorage.getItem(answeredDateStorageKey) === getTodayKey();

const notifyAnswerProgressChange = () => {
  window.dispatchEvent(new Event(answerProgressChangeEvent));
};

const setStoredAnswerStep = (step: AnswerStep) => {
  localStorage.setItem(answerStepStorageKey, String(step));
  notifyAnswerProgressChange();
};

export const completeAnswer = (): void => {
  const currentStep = getStoredAnswerStep();
  const nextStep = Math.min(currentStep + 1, 4) as AnswerStep;

  localStorage.setItem(answeredDateStorageKey, getTodayKey());
  setStoredAnswerStep(nextStep);
};

export const resetAnswerProgress = (): void => {
  localStorage.removeItem(answeredDateStorageKey);
  setStoredAnswerStep(1);
};

export const useAnswerProgress = (): UseAnswerProgressReturn => {
  const [currentStep, setCurrentStep] = useState<AnswerStep>(getStoredAnswerStep);
  const [hasAnsweredToday, setHasAnsweredToday] =
    useState<boolean>(getHasAnsweredToday);

  useEffect(() => {
    const syncAnswerProgress = () => {
      setCurrentStep(getStoredAnswerStep());
      setHasAnsweredToday(getHasAnsweredToday());
    };

    window.addEventListener('storage', syncAnswerProgress);
    window.addEventListener(answerProgressChangeEvent, syncAnswerProgress);

    return () => {
      window.removeEventListener('storage', syncAnswerProgress);
      window.removeEventListener(answerProgressChangeEvent, syncAnswerProgress);
    };
  }, []);

  return {
    bubbleText: hasAnsweredToday ? answeredBubbleText : unansweredBubbleText,
    completeAnswer,
    currentStep,
    hasAnsweredToday,
    resetAnswerProgress,
    title: stepTitleByStep[currentStep],
  };
};

export type AnswerStep = 1 | 2 | 3 | 4;
export type UserRole = 'parent' | 'child';

export interface MockAnswerProgress {
  currentStep: AnswerStep;
  hasAnsweredToday: boolean;
  userRole: UserRole;
}

export const mockAnswerProgress: MockAnswerProgress = {
  currentStep: 1,
  hasAnsweredToday: false,
  userRole: 'parent',
};

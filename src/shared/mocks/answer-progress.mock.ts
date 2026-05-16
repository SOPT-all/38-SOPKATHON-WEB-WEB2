export type AnswerStep = 1 | 2 | 3 | 4;
export type UserRole = 'parent' | 'child';

export interface MockAnswerProgress {
  browserToken: string;
  currentStep: AnswerStep;
  hasAnsweredToday: boolean;
  roomId: number;
  userRole: UserRole;
}

export const mockAnswerProgress: MockAnswerProgress = {
  browserToken: '0123456789abcdef0123456789abcdef',
  currentStep: 1,
  hasAnsweredToday: false,
  roomId: 1,
  userRole: 'parent',
};

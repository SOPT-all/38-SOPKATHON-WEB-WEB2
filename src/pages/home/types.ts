export type AnswerStep = 1 | 2 | 3 | 4;

export type UserRole = 'parent' | 'child';

export type ServerUserRole = 'CHILD' | 'GUARDIAN' | 'PARENT';

export interface HomeSession {
  browserToken: string;
  participantId: number;
  roomId: number;
  userRole: UserRole;
}

export interface HomeSessionStorageValue {
  browserToken: string;
  participantId: number;
  roomId: number;
  userRole: UserRole;
}

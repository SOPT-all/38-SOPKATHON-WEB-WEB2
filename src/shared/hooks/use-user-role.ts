import { useState } from 'react';

import {
  mockAnswerProgress,
  type UserRole,
} from '@/shared/mocks/answer-progress.mock';

interface UseUserRoleReturn {
  setUserRole: (role: UserRole) => void;
  userRole: UserRole;
}

export const useUserRole = (): UseUserRoleReturn => {
  const [userRole, setUserRole] = useState<UserRole>(
    mockAnswerProgress.userRole,
  );

  return {
    setUserRole,
    userRole,
  };
};

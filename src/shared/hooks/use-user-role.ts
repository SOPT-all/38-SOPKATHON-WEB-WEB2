import { useState } from 'react';

import { swapRoomRoles } from '@/pages/home/api';
import {
  mockAnswerProgress,
  type UserRole,
} from '@/shared/mocks/answer-progress.mock';

export interface UseUserRoleReturn {
  isSwappingRole: boolean;
  selectUserRole: (nextRole: UserRole) => void;
  userRole: UserRole;
}

export const useUserRole = (): UseUserRoleReturn => {
  const [userRole, setUserRole] = useState<UserRole>(
    mockAnswerProgress.userRole,
  );
  const [isSwappingRole, setIsSwappingRole] = useState(false);

  const selectUserRole = (nextRole: UserRole): void => {
    if (nextRole === userRole || isSwappingRole) {
      return;
    }

    setIsSwappingRole(true);

    void (async () => {
      try {
        await swapRoomRoles(mockAnswerProgress.roomId, {
          browserToken: mockAnswerProgress.browserToken,
        });
        setUserRole(nextRole);
      } finally {
        setIsSwappingRole(false);
      }
    })();
  };

  return {
    isSwappingRole,
    selectUserRole,
    userRole,
  };
};

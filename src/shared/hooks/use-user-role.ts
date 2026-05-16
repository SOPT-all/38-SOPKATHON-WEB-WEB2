import { useState } from 'react';

import { swapRoomRoles } from '@/pages/home/api';
import { type ServerUserRole, type UserRole } from '@/pages/home/types';
import { getHomeSession } from '@/pages/home/utils/home-session';
import {
  getStoredUserRole,
  setStoredUserRole,
} from '@/pages/home/utils/user-role-storage';

export interface UseUserRoleReturn {
  isSwappingRole: boolean;
  selectUserRole: (nextRole: UserRole) => void;
  userRole: UserRole;
}

const serverRoleToUserRole = (role: ServerUserRole): UserRole =>
  role === 'CHILD' ? 'child' : 'parent';

export const useUserRole = (): UseUserRoleReturn => {
  const [userRole, setUserRole] = useState<UserRole>(getStoredUserRole);
  const [isSwappingRole, setIsSwappingRole] = useState(false);

  const selectUserRole = (nextRole: UserRole): void => {
    if (nextRole === userRole || isSwappingRole) {
      return;
    }

    setIsSwappingRole(true);

    void (async () => {
      try {
        const { browserToken, participantId, roomId } = getHomeSession();
        const response = await swapRoomRoles(roomId, { browserToken });
        const currentParticipant = response.data.participants.find(
          (participant) => participant.participantId === participantId,
        );
        const swappedRole = currentParticipant
          ? serverRoleToUserRole(currentParticipant.role)
          : nextRole;

        setUserRole(swappedRole);
        setStoredUserRole(swappedRole);
        console.log('역할 교체 API 요청 성공', {
          response,
          userRole: swappedRole,
        });
      } catch (error) {
        console.error('역할 교체 API 요청 실패', error);
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

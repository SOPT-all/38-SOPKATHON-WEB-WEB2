import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { type UserRole } from '@/pages/home/types';
import { setHomeSession } from '@/pages/home/utils/home-session';
import { routePath } from '@/routes/path';

// TODO: 시연 종료 후 제거 — 사전 세팅된 룸으로 즉시 진입
const ROOM_ID = 15;
const TOKENS: Record<UserRole, string> = {
  parent: 'fdcd6eae186f097c3fd0cebb236b4e0c',
  child: '2e5001364e994ceb26fe42562fb38c5a',
};

interface DevSetParticipantProps {
  role: UserRole;
}

const DevSetParticipant = ({ role }: DevSetParticipantProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    setHomeSession({
      browserToken: TOKENS[role],
      participantId: 0,
      roomId: ROOM_ID,
      userRole: role,
    });
    void navigate(routePath.HOME, { replace: true });
  }, [navigate, role]);

  return <Navigate to={routePath.HOME} replace />;
};

export default DevSetParticipant;

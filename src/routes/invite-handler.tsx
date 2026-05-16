import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { postRoomsJoin } from '@/shared/api/rooms';

const InviteHandler = () => {
  const { inviteToken } = useParams<{ inviteToken: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!inviteToken) return;

    postRoomsJoin({ inviteToken })
      .then((data) => {
        localStorage.setItem('roomId', String(data.roomId));
        localStorage.setItem('browserToken', data.browserToken);
        localStorage.setItem('role', data.role);
        void navigate('/', { replace: true });
      })
      .catch(() => {});
  }, []);

  return null;
};

export default InviteHandler;

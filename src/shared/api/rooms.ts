import { publicInstance } from '@/shared/api/axios';

interface RoomsJoinResponse {
  roomId: number;
  participantId: number;
  role: string;
  browserToken: string;
}

export const postRoomsJoin = async (body: { inviteToken: string }) => {
  const res = await publicInstance.post<{ data: RoomsJoinResponse }>(
    '/api/rooms/join',
    body,
  );
  return res.data.data;
};

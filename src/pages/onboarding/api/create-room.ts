import { type ServerUserRole } from '@/pages/home/types';
import { publicInstance } from '@/shared/api';

interface CreateRoomResponseData {
  browserToken: string;
  inviteToken: string;
  inviteUrl: string;
  participantId: number;
  role: ServerUserRole;
  roomId: number;
}

interface CreateRoomResponse {
  data: CreateRoomResponseData;
  error: {
    code: number;
    message: string;
  } | null;
  success: boolean;
}

export const createRoom = async (): Promise<CreateRoomResponse> => {
  const { data } = await publicInstance.post<CreateRoomResponse>('/api/rooms');

  return data;
};

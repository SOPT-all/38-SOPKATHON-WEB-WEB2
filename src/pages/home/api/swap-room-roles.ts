import { publicInstance } from '@/shared/api';

interface SwapRoomRolesRequest {
  browserToken: string;
}

interface SwapRoomRolesParticipant {
  participantId: number;
  role: 'CHILD' | 'GUARDIAN' | 'PARENT';
}

interface SwapRoomRolesResponse {
  data: {
    participants: SwapRoomRolesParticipant[];
    roomId: number;
  };
  error: {
    code: number;
    message: string;
  } | null;
  success: boolean;
}

export const swapRoomRoles = async (
  roomId: number,
  body: SwapRoomRolesRequest,
): Promise<SwapRoomRolesResponse> => {
  const { data } = await publicInstance.patch<SwapRoomRolesResponse>(
    `/api/rooms/${roomId}/roles/swap`,
    body,
  );

  return data;
};

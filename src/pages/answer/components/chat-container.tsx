import Chip from '@/shared/ui/chip/Chip';

import MyAnswerCard from './my-answer-card';
import OpponentAnswerCard from './opponent-answer-card';

type UserRole = 'parent' | 'child';

interface ChatContainerProps {
  onCompleteAnswer?: () => void;
  opponentHasAnswer: boolean;
  role: UserRole;
  roomQuestionId: number;
}

const ChatContainer = ({
  onCompleteAnswer,
  opponentHasAnswer,
  role,
  roomQuestionId,
}: ChatContainerProps) => {
  return (
    <section className='flex w-full flex-col gap-[2.4rem]'>
      {/* 상대방 */}
      <div className='flex w-full flex-col items-start gap-[0.8rem]'>
        <Chip size='small' variant={opponentHasAnswer ? 'you' : 'youYet'}>
          {role === 'child' ? '부모님' : '자녀'}
        </Chip>
        <OpponentAnswerCard role={role} hasAnswer={opponentHasAnswer} />
      </div>

      {/* 나 */}
      <div className='flex w-full flex-col items-end gap-[0.8rem]'>
        <Chip size='small' variant='me'>
          나
        </Chip>
        <MyAnswerCard
          roomQuestionId={roomQuestionId}
          onCompleteAnswer={onCompleteAnswer}
        />
      </div>
    </section>
  );
};

export default ChatContainer;

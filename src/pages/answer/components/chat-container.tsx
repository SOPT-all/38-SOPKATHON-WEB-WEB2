import Chip from '@/shared/ui/chip/Chip';

import MyAnswerCard from './my-answer-card';
import OpponentAnswerCard from './opponent-answer-card';

type UserRole = 'parent' | 'child';

interface ChatContainerProps {
  role: UserRole;
  opponentHasAnswer: boolean;
}

const ChatContainer = ({ role, opponentHasAnswer }: ChatContainerProps) => {
  return (
    <section className='flex flex-col gap-[2.4rem]'>
      {/* 상대방 */}
      <div className='flex w-[32.7rem] flex-col items-start gap-[0.8rem]'>
        <Chip size='small' variant={opponentHasAnswer ? 'you' : 'youYet'}>
          {role === 'child' ? '부모님' : '자녀'}
        </Chip>
        <OpponentAnswerCard role={role} hasAnswer={opponentHasAnswer} />
      </div>

      {/* 나 */}
      <div className='flex w-[32.7rem] flex-col items-end gap-[0.8rem] self-end'>
        <Chip size='small' variant='me'>
          나
        </Chip>
        <MyAnswerCard />
      </div>
    </section>
  );
};

export default ChatContainer;

import { characterMain } from '@/shared/assets/images';
import { useAnswerProgress } from '@/shared/hooks';
import { QuestionBox } from '@/shared/ui';

import ChatContainer from './components/chat-container';

type UserRole = 'parent' | 'child';

const AnswerPage = () => {
  const { question, roomQuestionId } = useAnswerProgress();
  const role = (localStorage.getItem('role') ?? 'child') as UserRole;

  const handleCompleteAnswer = () => {
    // TODO: 답변 등록 완료 후 UI 흐름 정의
  };

  return (
    <div className='flex flex-col items-center gap-[2.4rem]'>
      <div className='w-[32.7rem] pt-[2.4rem]'>
        <QuestionBox
          variant='today'
          question={question}
          date={new Date()}
          imageSrc={characterMain}
          imageAlt='양양이 캐릭터'
        />
      </div>
      <div className='w-[32.7rem] pb-[13.4rem]'>
        <ChatContainer
          role={role}
          opponentHasAnswer={false}
          roomQuestionId={roomQuestionId}
          onCompleteAnswer={handleCompleteAnswer}
        />
      </div>
    </div>
  );
};

export default AnswerPage;

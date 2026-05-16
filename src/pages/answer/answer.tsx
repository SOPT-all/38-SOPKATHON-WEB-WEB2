import { characterMain } from '@/shared/assets/images';
import { QuestionBox } from '@/shared/ui';

import ChatContainer from './components/chat-container';

type UserRole = 'parent' | 'child';

const AnswerPage = () => {
  const role = (localStorage.getItem('role') ?? 'child') as UserRole;

  // TODO: GET /api/home에서 받아온 오늘 질문 ID로 교체
  const roomQuestionId = 1;

  const handleCompleteAnswer = () => {
    // TODO: 답변 등록 완료 후 UI 흐름 정의
  };

  return (
    <div className='flex flex-col items-center gap-[2.4rem]'>
      <div className='w-[32.7rem] pt-[2.4rem]'>
        <QuestionBox
          variant='today'
          question='엄마가 좋아하는 음식이 뭐야?'
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

import { useNavigate } from 'react-router-dom';

import { routePath } from '@/routes/path';
import { useUserRole } from '@/shared/hooks';

import ChatContainer from './components/chat-container';

const AnswerPage = () => {
  const navigate = useNavigate();
  const { userRole } = useUserRole();

  const handleCompleteAnswer = () => {
    void navigate(routePath.HOME);
  };

  return (
    <div className='flex flex-col gap-[1.6rem] px-[2rem] py-[2rem]'>
      <ChatContainer
        role={userRole}
        opponentHasAnswer={false}
        onCompleteAnswer={handleCompleteAnswer}
      />
    </div>
  );
};

export default AnswerPage;

import { IcAlertCircle } from '@/shared/assets/icons';

import { RecordCard } from '../archive/components';

const HomePage = () => {
  return (
    <div>
      <h1>홈 - 오늘의 질문</h1>
      <RecordCard
        question='엄마가 좋아하는 음식이 뭐야?'
        date='2026.05.24'
        to='/asdf'
      />
      {/* 오늘의 질문 */}
      {/* 지난 답변 4개 */}
      {/* 답변하러가기 버튼 */}
      <IcAlertCircle />
    </div>
  );
};

export default HomePage;

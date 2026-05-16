import { type ChangeEvent, useRef, useState } from 'react';

import { postAnswer } from '@/pages/answer/api';
import { IcCamera } from '@/shared/assets/icons';
import TextButton from '@/shared/ui/text-button/TextButton';
import { uploadFile } from '@/shared/utils';

interface MyAnswerCardProps {
  roomQuestionId: number;
  onCompleteAnswer?: () => void;
}

const MyAnswerCard = ({
  roomQuestionId,
  onCompleteAnswer,
}: MyAnswerCardProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelectClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsSubmitting(true);
    try {
      const videoKey = await uploadFile(file);
      await postAnswer({ roomQuestionId, videoKey });
      onCompleteAnswer?.();
      alert('답변이 등록되었습니다');
    } catch (error) {
      console.error(error);
      alert('답변 등록에 실패했습니다');
    } finally {
      setIsSubmitting(false);
      e.target.value = '';
    }
  };

  return (
    <div className='flex w-full flex-col items-center gap-[2.4rem] rounded-4xl border border-dashed border-[#FF68B6] bg-[#FFF0F8] px-[1.6rem] py-16'>
      <p className='typo-body-r-16 text-center text-neutral-300'>
        지금 영상으로 답변을
        <br />
        남겨주세요
      </p>
      <TextButton
        size='small'
        rightIcon={<IcCamera />}
        onClick={handleSelectClick}
        disabled={isSubmitting}
      >
        {isSubmitting ? '업로드 중...' : '나의 답변 남기기'}
      </TextButton>
      <input
        ref={fileInputRef}
        type='file'
        accept='video/*'
        onChange={(e) => void handleFileChange(e)}
        className='hidden'
      />
    </div>
  );
};

export default MyAnswerCard;

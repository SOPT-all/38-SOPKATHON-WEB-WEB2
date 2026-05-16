import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  type AnswerDetail,
  getAnswerDetail,
  type Role,
} from '@/pages/answer-detail/api';
import { Chip, Video } from '@/shared/ui';

const ROLE_LABEL: Record<Role, string> = {
  PARENT: '부모님',
  CHILD: '자녀',
};

const formatQuestionDate = (iso: string): string => {
  const d = new Date(iso);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}년 ${month}월 ${day}일`;
};

const formatTime = (iso: string): string => {
  const d = new Date(iso);
  const hours = d.getHours();
  const period = hours < 12 ? '오전' : '오후';
  const display = hours % 12 === 0 ? 12 : hours % 12;
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${period} ${String(display).padStart(2, '0')}:${minutes}`;
};

const AnswerDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<AnswerDetail | null>(null);

  useEffect(() => {
    if (!id) return;
    void getAnswerDetail(id)
      .then((res) => setData(res))
      .catch(() => {});
  }, [id]);

  if (!data) return null;

  const myAnswer = data.answers.find((a) => a.isMine);
  const opponentAnswer = data.answers.find((a) => !a.isMine);

  return (
    <section className='flex flex-col gap-[2.4rem] px-[2.4rem] pt-[1.2rem] pb-[2.4rem]'>
      <article className='flex flex-col items-start gap-[0.8rem] rounded-[1.6rem] bg-white px-[2.4rem] pt-[2.4rem] pb-[3.4rem] shadow-[0px_0px_4px_0px_#ffd0e8]'>
        <Chip variant='question'>완료된 질문</Chip>
        <div className='flex flex-col gap-[0.4rem]'>
          <h2 className='typo-body-sb-14 text-neutral-800'>{data.question}</h2>
          <p className='typo-body-r-14 text-neutral-300'>
            {formatQuestionDate(data.completedAt)}
          </p>
        </div>
      </article>

      <section className='flex flex-col gap-[2.4rem]'>
        {opponentAnswer && (
          <div className='flex flex-col items-start gap-[0.8rem]'>
            <Chip size='small' variant='me'>
              {ROLE_LABEL[opponentAnswer.role]}
            </Chip>
            <div className='flex items-end gap-[0.8rem]'>
              <Video src={opponentAnswer.videoUrl} width={200} height={113} />
              <time className='typo-caption-r-12 text-neutral-300'>
                {formatTime(opponentAnswer.answeredAt)}
              </time>
            </div>
          </div>
        )}

        {myAnswer && (
          <div className='flex flex-col items-end gap-[0.8rem]'>
            <Chip size='small' variant='me'>
              나
            </Chip>
            <div className='flex items-end gap-[0.8rem]'>
              <time className='typo-caption-r-12 text-neutral-300'>
                {formatTime(myAnswer.answeredAt)}
              </time>
              <Video src={myAnswer.videoUrl} width={200} height={113} />
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default AnswerDetailPage;

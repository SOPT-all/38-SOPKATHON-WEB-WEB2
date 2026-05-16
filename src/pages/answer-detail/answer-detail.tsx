import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { type AnswerDetail, getAnswerDetail } from '@/pages/answer-detail/api';
import { Chip, Video } from '@/shared/ui';

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

  return (
    <section className='flex flex-col gap-[2.4rem] px-[2.4rem] pt-[1.2rem] pb-[2.4rem]'>
      <article className='flex flex-col items-start gap-[0.8rem] rounded-[1.6rem] bg-white px-[2.4rem] pt-[2.4rem] pb-[3.4rem] shadow-[0px_0px_4px_0px_#ffd0e8]'>
        <Chip variant='question'>완료된 질문</Chip>
        <div className='flex flex-col gap-[0.4rem]'>
          <h2 className='typo-body-sb-14 text-neutral-800'>{data.question}</h2>
          <p className='typo-body-r-14 text-neutral-300'>{data.questionDate}</p>
        </div>
      </article>

      <section className='flex flex-col gap-[2.4rem]'>
        <div className='flex flex-col items-start gap-[0.8rem]'>
          <Chip size='small' variant='me'>
            부모님
          </Chip>
          <div className='flex items-end gap-[0.8rem]'>
            <Video src={data.parentVideoUrl} width={200} height={113} />
            <time className='typo-caption-r-12 text-neutral-300'>
              {data.parentTime}
            </time>
          </div>
        </div>

        <div className='flex flex-col items-end gap-[0.8rem]'>
          <Chip size='small' variant='me'>
            나
          </Chip>
          <div className='flex items-end gap-[0.8rem]'>
            <time className='typo-caption-r-12 text-neutral-300'>
              {data.myTime}
            </time>
            <Video src={data.myVideoUrl} width={200} height={113} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AnswerDetailPage;

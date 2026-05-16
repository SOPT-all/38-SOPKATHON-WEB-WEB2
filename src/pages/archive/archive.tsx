import { useEffect, useState } from 'react';

import { getRecords, type RecordItem } from '@/pages/archive/api';
import { RecordCard } from '@/pages/archive/components';

const ArchivePage = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    void getRecords()
      .then((data) => setRecords(data))
      .catch(() => {});
  }, []);

  return (
    <section className='flex flex-col gap-[1.2rem] p-[2.4rem]'>
      <header className='px-[0.4rem]'>
        <h1 className='typo-head-sb-20 text-neutral-900'>내 기록</h1>
      </header>
      <ul className='flex list-none flex-col gap-[1.4rem] pb-[2.4rem]'>
        {records.map(({ id, question, date }) => (
          <li key={id}>
            <RecordCard question={question} date={date} to={`/answer/${id}`} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArchivePage;

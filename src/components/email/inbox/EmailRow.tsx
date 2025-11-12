import { Checkbox } from 'components/common/Checkbox';
import { memo } from 'react';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import type { Email } from 'types';

export const EmailRow = memo(({ starred, sender, subject, timestamp }: Email) => {
  return (
    <div className='border-b border-[#5C5A5A] flex justify-between gap-2 md:gap-10 cursor-pointer py-2'>
      <div className='w-[10%] flex items-center gap-1 md:justify-between'>
        <Checkbox className='!w-auto' />
        <button className='flex-shrink-0'>
          {starred ? (
            <TiStarFullOutline className='w-5 h-5' />
          ) : (
            <TiStarOutline className='w-5 h-5' />
          )}
        </button>
      </div>
      <div className=' md:w-[70%] text-xs md:text-sm'>
        <h4 className=' font-semibold'>{sender}</h4>
        <p className=''>{subject}</p>
      </div>

      <div className='w-[25%] md:w-[20%] flex justify-center items-center'>
        <p className='text-xs md:text-sm'>{timestamp}</p>
      </div>
    </div>
  );
});

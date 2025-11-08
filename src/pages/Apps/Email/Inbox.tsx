import { Checkbox } from 'components/common/Checkbox';
import { Textfield } from 'components/common/Textfield';
import { GoSearch } from 'react-icons/go';
import { IoRefreshOutline } from 'react-icons/io5';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { TiStarFullOutline } from 'react-icons/ti';

const Inbox = () => {
  return (
    <div>
      <div className='flex justify-between items-center mb-4 w-full'>
        <h1 className='text-lg font-bold'>Inbox</h1>
        <Textfield
          id='search'
          placeholder='Search...'
          type='search'
          className='w-32 md:w-48 lg:w-64 ring-0 focus:ring-0 border border-[#6F6F6F] bg-[#FAFAFA] px-3 py-2'
          surfixIcon={<GoSearch className='w-4 h-4' />}
        />
      </div>
      <div className='flex justify-between items-center border-[#A4A4A4] py-3 mb-4'>
        <div className='flex gap-2 items-center'>
          <span>
            <Checkbox className='' />
          </span>
          <span className='h-8 w-8 border border-[#888888] flex justify-center items-center rounded-full p-1.5 bg-[#F5F5F5]'>
            <IoRefreshOutline className='text-[#222E12] w-6 h-6' />
          </span>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='text-sm'>1-15 of 165</div>
          <div className='flex gap-1'>
            <span className='h-8 w-8 border border-[#888888] flex justify-center items-center rounded-full p-1.5 bg-[#F5F5F5]'>
              <RiArrowLeftSLine className='w-5 h-5' />
            </span>
            <span className='h-8 w-8 border border-[#888888] flex justify-center items-center rounded-full p-1.5 bg-[#F5F5F5]'>
              <RiArrowRightSLine />
            </span>
          </div>
        </div>
      </div>
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className='border-b border-[#5C5A5A] flex justify-between gap-2 md:gap-10 cursor-pointer py-2'>
          <div className='w-[10%] flex items-center justify-between'>
            <Checkbox className='!w-auto' />
            <TiStarFullOutline className='w-4 h-4' />
          </div>
          <div className='w-[70%] text-xs md:text-sm'>
            <h4 className=' font-semibold'>Nuno Affilliate</h4>
            <p className='hidden md:block'>Your application to the Nuno Affilliate Network</p>
            <p className='block md:hidden'>Your application to the Nuno...</p>
          </div>

          <div className='w-[20%] flex justify-center items-center'>
            <p className='text-xs md:text-sm'>Yesterday</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Inbox;

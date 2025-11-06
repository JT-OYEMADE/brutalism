import { SlideInAnimation } from 'components/common/SlideInAnimation';
import { IoMdAdd } from 'react-icons/io';

const Merchants = () => {
  return (
    <SlideInAnimation>
      <div className='bg-white rounded-lg py-8 px-3 md:px-6 text-gray-600 h-full'>
        <div className='flex justify-between items-center'>
          <p className='text-xl font-medium'>Merchants</p>
          <div className='flex gap-1 items-center cursor-pointer'>
            <IoMdAdd className='w-6 h-6' />
            <p className='text-md font-medium'>Add Merchants</p>
          </div>
        </div>
        <div className='mt-3 flex gap-1 items-center justify-between'>
          {Array.from({ length: 5 }, (_, key) => (
            <div className='flex flex-col gap-2 items-center w-1/5' key={key}>
              <div className='font-semibold text-lg cursor-pointer w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-gray-100'>
                DL
              </div>
              <div className='bg-gray-100 rounded-md p-1 xl:px-3 max-w-[55px] sm:max-w-none overflow-hidden'>
                <p className='text-[9px] xl:text-xs text-gray-500 truncate whitespace-nowrap'>
                  Adisa Debo...
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className='mt-4 text-right text-gray-400 cursor-pointer text-xs'>See all</p>
      </div>
    </SlideInAnimation>
  );
};

export default Merchants;

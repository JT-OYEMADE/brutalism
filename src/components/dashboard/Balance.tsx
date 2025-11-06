import { IoMdAdd } from 'react-icons/io';
import { useBalance } from 'hooks/balance';
import Button from 'components/common/Button';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { CgMoreVertical } from 'react-icons/cg';
import Selectfield from 'components/common/Selectfield';

import { FaArrowRightArrowLeft, FaArrowUpLong, FaArrowDownLong } from 'react-icons/fa6';
import { SlideInAnimation } from 'components/common/SlideInAnimation';

const actions = [
  { label: 'Send', icon: <FaArrowUpLong className='w-4 h-4 lg:w-5 lg:h-5' /> },
  { label: 'Recieve', icon: <FaArrowDownLong className='w-4 h-4 lg:w-5 lg:h-5' /> },
  { label: 'Swap', icon: <FaArrowRightArrowLeft className='w-4 h-4 lg:w-5 lg:h-5' /> },
];

const Balance = () => {
  const { isBalanceVisible, toggleBalanceVisibility } = useBalance();
  return (
    <SlideInAnimation>
      <div className='bg-white rounded-lg py-8 px-3 md:px-6 text-gray-600'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2'>
            <p className='text-lg font-medium'>NGN.</p>
            <Selectfield
              id='balanceCurrency'
              options={[{ label: 'Naira', value: 'naira' }]}
              className='text-gray-500'
            />
          </div>
          <div className='flex gap-1 items-center cursor-pointer'>
            <IoMdAdd className='w-6 h-6' />
            <p className='text-md font-medium'>Deposit</p>
          </div>
        </div>
        {
          <div
            className='flex gap-2 items-center cursor-pointer'
            onClick={toggleBalanceVisibility}>
            <h2 className='text-2xl lg:text-4xl font-semibold mt-2'>
              {isBalanceVisible ? '₦ 34,645,233' : '*****'}
            </h2>
            <span className={isBalanceVisible ? 'mt-2' : ''}>
              {!isBalanceVisible ? <FiEyeOff className='w-4' /> : <FiEye className='w-4' />}
            </span>
          </div>
        }

        <div className='mt-10 flex items-center justify-between gap-2 lg:gap-4'>
          <div className='flex w-full gap-2 lg:gap-4 items-center justify-between w-[5/6]'>
            {actions.map((action, index) => (
              <Button key={index} prefixIcon={action.icon} label={action.label} />
            ))}
          </div>
          <div className='cursor-pointer w-[1/6] flex rounded-full p-3 lg:p-4 bg-gray-100 hover:bg-gray-300 transition-colors transition-all duration-700 ease-[cubic-bezier(0.2,1,0.22,1)]'>
            <CgMoreVertical className='w-5 h-5' />
          </div>
        </div>
      </div>
    </SlideInAnimation>
  );
};

export default Balance;

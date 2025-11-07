import { GrCurrency } from 'react-icons/gr';

export const SummaryCard = () => {
  return (
    <div className='border border-[#787878] p-4 bg-white'>
      <h4>Total Spend</h4>
      <div className='flex justify-between mt-2 mb-5'>
        <div>
          <div className='text-2xl font-bold'>$8,765</div>
          <p className='text-sm'>Previous</p>
          <div className='text-xs'>$10,234</div>
        </div>
        <div className='text-right flex flex-col items-end'>
          <GrCurrency className='text-[#7DD03E] w-5 h-5' />
          <p className='text-sm'>Progress</p>
          <div className='text-xs'>+40.97%</div>
        </div>
      </div>
    </div>
  );
};

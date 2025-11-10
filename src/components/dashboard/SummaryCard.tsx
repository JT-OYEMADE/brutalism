import { SlideInAnimation } from 'components/common/SlideInAnimation';

interface SummaryCardProps {
  title: string;
  balance: string;
  previousBal: string;
  progress: number;
  icon?: React.ReactNode;
}

export const SummaryCard = ({
  title,
  balance,
  previousBal,
  progress,
  icon,
}: SummaryCardProps) => {
  return (
    <SlideInAnimation>
      <div className='border border-[#787878] p-4 bg-white'>
        <h4 className='font-medium'>{title}</h4>
        <div className='flex justify-between mt-2 mb-5'>
          <div>
            <div className='text-2xl font-bold'>{balance}</div>
            <p className='text-sm'>Previous</p>
            <div className='text-sm font-semibold '>{previousBal}</div>
          </div>
          <div className='text-right flex flex-col items-end'>
            {icon}
            <p className='text-sm'>Progress</p>
            <div className='text-sm text-[#7DD03E] font-semibold'>{progress}%</div>
          </div>
        </div>
      </div>
    </SlideInAnimation>
  );
};

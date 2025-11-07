import { SummaryCard } from 'components/dashboard/SummaryCard';
import { AcquisitionChart } from 'components/dashboard/AcquisitionChart';
import { BudgetByPlatform } from 'components/dashboard/Budget';
import { TrafficSource } from 'components/dashboard/TrafficSource';
import { useState } from 'react';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState(7);
  const timeRanges = [
    { label: '7 Days', value: 7 },
    { label: '14 Days', value: 14 },
    { label: '1 Month', value: 30 },
  ];
  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center mt-5'>
        <div>
          <h2 className='text-2xl font-semibold text-black'>Marketing</h2>
        </div>
        <div className='flex border border-[#7F7F7F] w-fit divide-x divide-[#7F7F7F]'>
          {timeRanges.map((range) => (
            <button
              onClick={() => setTimeRange(range.value)}
              key={range.value}
              className={`px-4 py-1 bg-white font-medium   ${
                timeRange === range.value ? ' text-[#6FAE36]' : 'text-[#242424]'
              }`}>
              {range.label}
            </button>
          ))}
        </div>
      </div>
      {/* one */}
      <div className='flex gap-4 w-full'>
        <div className='w-1/2 grid grid-cols-2 gap-4'>
          <SummaryCard />
          <SummaryCard />
          <SummaryCard />
          <SummaryCard />
        </div>
        <div className='w-1/2'>
          <div className='border border-[#787878] p-4 bg-white'>
            <AcquisitionChart />
          </div>
        </div>
      </div>
      {/* two */}
      <div className='flex gap-4 w-full'>
        <div className='w-1/2'>
          <div className='border border-[#787878] p-4 bg-white'>
            <TrafficSource />
          </div>
        </div>
        <div className='w-1/2 '>
          <div className='border border-[#787878] p-4 bg-white h-full'>
            <BudgetByPlatform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

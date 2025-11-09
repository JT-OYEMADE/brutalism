import { SummaryCard } from 'components/dashboard/SummaryCard';
import { AcquisitionChart } from 'components/dashboard/AcquisitionChart';
import { BudgetByPlatform } from 'components/dashboard/Budget';
import { TrafficSource } from 'components/dashboard/TrafficSource';
import { useState } from 'react';
import { GrCurrency } from 'react-icons/gr';
import { HiCurrencyDollar, HiOutlineUsers } from 'react-icons/hi';
import { GoCheckCircle } from 'react-icons/go';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState(7);
  const timeRanges = [
    { label: '7 Days', value: 7 },
    { label: '14 Days', value: 14 },
    { label: '1 Month', value: 30 },
  ];

  const marketing = [
    {
      title: 'Total Spend',
      balance: '$8,765',
      previousBal: '$10,234',
      progress: 40.97,
      icon: <GrCurrency className='text-[#7DD03E] w-5 h-5' />,
    },
    {
      title: 'Visitor',
      balance: '$14,321',
      previousBal: '$13,543',
      progress: 6.37,
      icon: <HiOutlineUsers className='text-[#7DD03E] w-5 h-5' />,
    },
    {
      title: 'Acquisition',
      balance: '$1,023',
      previousBal: '$876',
      progress: 16.73,
      icon: <GoCheckCircle className='text-[#7DD03E] w-5 h-5' />,
    },
    {
      title: 'Revenue',
      balance: '$18,765',
      previousBal: '$15,432',
      progress: 21.67,
      icon: <HiCurrencyDollar className='text-[#7DD03E] w-5 h-5' />,
    },
  ];
  return (
    <div className='space-y-8'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center md:mt-5'>
        <div>
          <h2 className='text-2xl font-semibold text-black'>Marketing</h2>
        </div>
        <div className='flex border border-[#7F7F7F] w-fit divide-x divide-[#7F7F7F] mt-3 md:mt-0'>
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
      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <div className='w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {marketing.map((item) => (
            <SummaryCard
              key={item.title}
              title={item.title}
              balance={item.balance}
              previousBal={item.previousBal}
              progress={item.progress}
              icon={item.icon}
            />
          ))}
        </div>
        <div className='w-full md:w-1/2'>
          <div className='border border-[#787878] p-4 bg-white'>
            <AcquisitionChart />
          </div>
        </div>
      </div>
      {/* two */}
      <div className='flex  flex-col md:flex-row gap-4 w-full'>
        <div className='w-full md:w-1/2'>
          <div className='border border-[#787878] p-2 md:p-4 bg-white'>
            <TrafficSource />
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='border border-[#787878] p-4 bg-white h-full'>
            <BudgetByPlatform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

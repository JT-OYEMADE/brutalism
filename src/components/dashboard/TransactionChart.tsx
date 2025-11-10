import {
  Area,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import Selectfield from 'components/common/Selectfield';

const data = [
  { day: 1, moneyIn: 10000000, moneyOut: 0 },
  { day: 4, moneyIn: 18000000, moneyOut: 0 },
  { day: 8, moneyIn: 25000000, moneyOut: 10000000 },
  { day: 12, moneyIn: 30000000, moneyOut: 18000000 },
  { day: 15, moneyIn: 32000000, moneyOut: 25000000 },
  { day: 18, moneyIn: 30000000, moneyOut: 32000000 },
  { day: 22, moneyIn: 35000000, moneyOut: 38000000 },
  { day: 25, moneyIn: 25000000, moneyOut: 40000000 },
  { day: 28, moneyIn: 15000000, moneyOut: 30000000 },
  { day: 31, moneyIn: 1000000, moneyOut: 10000000 },
];

const formatNaira = (value: number) => {
  if (value >= 1000000) {
    return `₦${value / 1000000}m`;
  }
  if (value >= 1000) {
    return `₦${value / 1000}k`;
  }
  return `₦${value}`;
};

const TransactionChart = () => {
  return (
    <div className='bg-white rounded-lg py-8 px-3 md:px-6 text-gray-600'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-lg'>Money out/Money in</h3>
        <Selectfield
          id='dateRange'
          options={[{ label: 'Date Range', value: 'date' }]}
          className='text-gray-600 bg-gray-200 rounded-md px-2 py-1'
        />
      </div>
      <div className='mt-4 flex items-center gap-8'>
        <div className='flex gap-2 items-center'>
          <div className='w-3 h-3 bg-[#FFA726]'></div>
          <span className=' text-gray-400 text-xs'>Money In</span>
          <span className='text-gray-500 text-xs md:text-md'>₦1,000,000</span>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='w-3 h-3 bg-[#EF5350]'></div>
          <span className=' text-gray-400 text-xs'>Money Out</span>
          <span className='text-gray-500 text-xs md:text-md'>₦1,000,000</span>
        </div>
      </div>
      <div className='mt-4'>
        <div className='bg-white rounded-xl shadow-sm h-[250px] xl:h-[218px]'>
          <div className='h-full w-full'>
            <ResponsiveContainer width='100%' height='100%'>
              <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id='colorMoneyIn' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#FFA726' stopOpacity={0.8} />{' '}
                    <stop offset='95%' stopColor='#FFA726' stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id='colorMoneyOut' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#EF5350' stopOpacity={0.8} />{' '}
                    <stop offset='95%' stopColor='#EF5350' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#E0E0E0' />
                <XAxis
                  dataKey='day'
                  tickLine={false}
                  axisLine={false}
                  padding={{ left: 10, right: 10 }}
                  ticks={[1, 8, 15, 22, 31]}
                  interval='preserveStartEnd'
                  tickFormatter={(tick) => `${tick}`}
                  style={{ fontSize: '12px', fill: '#757575' }}
                />
                <YAxis
                  tickFormatter={formatNaira}
                  tickLine={false}
                  axisLine={false}
                  orientation='right'
                  domain={[0, 45000000]}
                  ticks={[0, 1000000, 10000000, 20000000, 30000000, 40000000]}
                  style={{ fontSize: '12px', fill: '#757575' }}
                />
                <Tooltip
                  formatter={(value: number) => `₦${value.toLocaleString()}`}
                  labelFormatter={(label: number) => `Day: ${label}`}
                  contentStyle={{
                    borderRadius: '8px',
                    border: '1px solid #E0E0E0',
                    fontSize: '14px',
                  }}
                  itemStyle={{ padding: '2px 0' }}
                />

                <Area
                  type='monotone'
                  dataKey='moneyIn'
                  stroke='#FFA726'
                  fill='url(#colorMoneyIn)'
                  fillOpacity={0.7}
                  strokeWidth={2}
                  activeDot={{ r: 5, fill: '#FFA726', stroke: '#FFF', strokeWidth: 2 }}
                  name='moneyIn'
                />
                <Area
                  type='monotone'
                  dataKey='moneyOut'
                  stroke='#EF5350'
                  fill='url(#colorMoneyOut)'
                  fillOpacity={0.7}
                  strokeWidth={2}
                  activeDot={{ r: 5, fill: '#EF5350', stroke: '#FFF', strokeWidth: 2 }}
                  name='moneyOut'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionChart;

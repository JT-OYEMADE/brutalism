import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: 'March 1', acquisition: 240, cost: 20000 },
  { date: 'March 2', acquisition: 300, cost: 16000 },
  { date: 'March 3', acquisition: 280, cost: 22000 },
  { date: 'March 4', acquisition: 500, cost: 32000 },
  { date: 'March 5', acquisition: 450, cost: 30000 },
  { date: 'March 6', acquisition: 550, cost: 28000 },
  { date: 'March 7', acquisition: 400, cost: 25000 },
];

export const AcquisitionChart = () => {
  return (
    <div className=''>
      <h3 className='text-lg font-semibold text-foreground mb-4'>Acquisition vs Cost</h3>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
          <XAxis dataKey='date' stroke='#6b7280' />
          <YAxis yAxisId='left' orientation='left' stroke='#6b7280' dataKey='acquisition' />
          <YAxis yAxisId='right' orientation='right' dataKey='cost' />
          <Tooltip
            contentStyle={{
              backgroundColor: '#f3f4f6',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
            }}
          />
          <Line
            type='monotone'
            dataKey='acquisition'
            stroke='#3b82f6'
            strokeWidth={2}
            dot={false}
            yAxisId='left'
          />
          <Line
            type='monotone'
            yAxisId='right'
            dataKey='cost'
            stroke='#22c55e'
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

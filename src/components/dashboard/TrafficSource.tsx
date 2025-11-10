import { SlideInAnimation } from 'components/common/SlideInAnimation';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'March 1', organic: 60, direct: 40, referral: 50, custom: 20, social: 30 },
  { date: 'March 2', organic: 50, direct: 30, referral: 35, custom: 25, social: 20 },
  { date: 'March 3', organic: 70, direct: 35, referral: 45, custom: 30, social: 25 },
  { date: 'March 4', organic: 90, direct: 45, referral: 55, custom: 35, social: 30 },
  { date: 'March 5', organic: 75, direct: 40, referral: 50, custom: 28, social: 27 },
  { date: 'March 6', organic: 60, direct: 35, referral: 40, custom: 22, social: 22 },
  { date: 'March 7', organic: 65, direct: 38, referral: 45, custom: 24, social: 24 },
];

const colors = ['#E5F5D5', '#CFEAAC', '#B6E081', '#9ED554', '#81CB3D'];

export const TrafficSource = () => {
  return (
    <SlideInAnimation>
      <div className=''>
        <h3 className='text-lg font-semibold text-foreground mb-4'>Traffic Source</h3>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={data}>
            {/* <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' /> */}
            <XAxis dataKey='date' stroke='#6b7280' />
            <YAxis stroke='#6b7280' />
            <Bar dataKey='organic' stackId='a' fill={colors[4]} />
            <Bar dataKey='direct' stackId='a' fill={colors[3]} />
            <Bar dataKey='referral' stackId='a' fill={colors[2]} />
            <Bar dataKey='custom' stackId='a' fill={colors[1]} />
            <Bar dataKey='social' stackId='a' fill={colors[0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SlideInAnimation>
  );
};

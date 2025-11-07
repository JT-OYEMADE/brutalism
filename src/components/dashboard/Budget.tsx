import { BsBing } from 'react-icons/bs';
import { FaFacebook, FaGoogle, FaTiktok } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

interface PlatformBudget {
  name: string;
  icon: any;
  remaining: number;
  percentage: number;
  color: string;
  fill?: string;
}

const platforms: PlatformBudget[] = [
  {
    name: 'Facebook',
    icon: <FaFacebook className='w-5 h-5' />,
    remaining: 12345,
    percentage: 60,
    color: '#7DD03E',
    fill: '#EAFACD',
  },
  {
    name: 'X',
    icon: <RiTwitterXFill className='w-5 h-5' />,
    remaining: 1543,
    percentage: 86,
    color: '#7DD03E',
    fill: '#EAFACD',
  },
  {
    name: 'Google',
    icon: <FaGoogle className='w-5 h-5' />,
    remaining: 5678,
    percentage: 67,
    color: '#7DD03E',
    fill: '#EAFACD',
  },
  {
    name: 'TikTok',
    icon: <FaTiktok className='w-5 h-5' />,
    remaining: 3456,
    percentage: 21,
    color: '#E93333',
    fill: '#FAE2E2',
  },
  {
    name: 'Bing',
    icon: <BsBing className='w-5 h-5' />,
    remaining: 2098,
    percentage: 35,
    color: '#EFB23E',
    fill: '#FDF5C4',
  },
];

export const BudgetByPlatform = () => {
  return (
    <div className=''>
      <h3 className='text-lg font-semibold text-foreground mb-6'>Budget by Platform</h3>
      <div className='space-y-4'>
        {platforms.map((platform) => (
          <div className='flex items-center gap-x-4'>
            <div className='max-w-[10%]'>{platform.icon}</div>
            <div className='w-[90%]'>
              <div className='flex justify-between mb-1'>
                <p className='text-sm text-muted-foreground'>
                  Remaining: ${platform.remaining.toLocaleString()}
                </p>
                <p className='text-xs font-semibold text-foreground'>{platform.percentage}%</p>
              </div>
              <div>
                <div
                  className='w-full rounded-full h-2'
                  style={{ backgroundColor: platform.fill }}>
                  <div
                    className={`h-2 rounded-full`}
                    style={{
                      width: `${platform.percentage}%`,
                      backgroundColor: platform.color,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

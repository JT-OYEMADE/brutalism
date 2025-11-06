import Marquee from 'react-fast-marquee';
import { SlideInAnimation } from 'components/common/SlideInAnimation';

const fxRates = [
  {
    from: 'NGN',
    to: 'EU',
    rate: '₦1,640 → €1',
    flags: ['https://flagcdn.com/w40/ng.png', 'https://flagcdn.com/w40/eu.png'],
  },
  {
    from: 'NGN',
    to: 'GBP',
    rate: '₦1,640 → £1',
    flags: ['https://flagcdn.com/w40/ng.png', 'https://flagcdn.com/w40/gb.png'],
  },

  {
    from: 'NGN',
    to: 'USD',
    rate: '₦1,640 → $1',
    flags: ['https://flagcdn.com/w40/ng.png', 'https://flagcdn.com/w40/us.png'],
  },
];

const FxRates = () => {
  return (
    <SlideInAnimation>
      <div className='bg-white rounded-lg py-8 text-gray-600'>
        <div className='flex justify-between items-center px-3 md:px-6'>
          <h3 className='font-semibold text-xl'>FX Rates</h3>
          <p className='text-gray cursor-pointer text-sm text-gray-400'>See all</p>
        </div>
        <div className='mt-6 pl-3 md:pl-6'>
          <Marquee pauseOnHover={true} gradient={false} speed={30}>
            {[...fxRates, ...fxRates, ...fxRates].map((rate, index) => (
              <div
                key={index}
                className='flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg shadow-sm mx-2 md:mx-5'>
                <div className='flex -space-x-2'>
                  {rate.flags.map((flag, idx) => (
                    <img
                      key={idx}
                      src={flag}
                      alt={`${rate.from}-${rate.to}`}
                      className='w-8 h-8 rounded-full border border-white'
                    />
                  ))}
                </div>

                <div className='flex flex-col text-xs font-medium text-gray-600'>
                  <div className='flex items-center gap-1 text-gray-400'>
                    <span>{rate.from}</span>
                    <span className='text-sm'>⇄</span>
                    <span>{rate.to}</span>
                  </div>
                  <div className='text-sm font-semibold text-black'>{rate.rate}</div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </SlideInAnimation>
  );
};

export default FxRates;

import { RiPushpin2Fill } from 'react-icons/ri';

const NotificationBar = () => {
  return (
    <div className='w-full relative'>
      <div className='mb-10 lg:mb-0 -top-2 mt-4 lg:mt-0 lg:absolute w-full animate-vibrate'>
        <div className='w-fit mx-auto bg-[#f8ebe1] rounded-lg px-4 py-3 flex gap-1 items-center text-sm lg:text-md'>
          <div>
            <RiPushpin2Fill className='text-red-500 w-6 h-6 ' />
          </div>
          <h3 className='text-gray-600'>
            Your account has been set up for OTC trade, please <b>Contact OTC</b> to transact
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;

import { FaBars, FaUserCircle } from 'react-icons/fa';

interface Navbarprops {
  setSidebarOpen: (val: boolean) => void;
}

const Navbar = ({ setSidebarOpen }: Navbarprops) => {
  return (
    <div className='border-b border-[#989B98] w-full px-4 lg:pl-[19rem] lg:pr-10 sticky top-0 z-20 flex justify-between h-full shrink-0 items-center gap-x-4 bg-[#F5F5F5] shadow-lgs sm:gap-x-6 sm:px-6  py-2 lg:py-3'>
      <button
        type='button'
        className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
        onClick={() => setSidebarOpen(true)}>
        <span className='sr-only'>Open sidebar</span>
        <FaBars className='h-6 w-6' aria-hidden='true' />
      </button>

      <div className='flex gap-x-4 justify-between items-center lg:w-full'>
        <div></div>
        <div className='flex gap-2 items-center'>
          <FaUserCircle className='h-10 w-10' />
          <div className='text-[10px] md:text-xs'>
            <h5 className='font-bold'>
              {/* {capitalizeFirstLetter(user?.firstName)} {capitalizeFirstLetter(user?.lastName)} */}
            </h5>
            <p className='mt-1'>Aggregator Code</p>
            {/* <p>{aggregator?.aggregatorCode}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

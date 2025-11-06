import { Textfield } from 'components/common/Textfield';
import { BsTranslate } from 'react-icons/bs';
import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { IoIosMail } from 'react-icons/io';
import { RiSettings2Fill } from 'react-icons/ri';

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

      <div className='flex gap-x-6 justify-between items-center lg:w-full'>
        <div className='hidden lg:block'>
          <Textfield
            id='search'
            placeholder='Search'
            type='search'
            className='w-32 md:w-48 lg:w-64 ring-0 focus:ring-0 border border-[#6F6F6F] bg-[#FAFAFA] px-3 py-2'
            surfixIcon={<GoSearch className='w-4 h-4' />}
          />
        </div>
        <div className='flex gap-4 items-center'>
          <span className='border-2 border-[#3B3B3B] bg-white rounded-full p-2'>
            <RiSettings2Fill className='h-4 w-4' />
          </span>
          <span className='border-2 border-[#3B3B3B] bg-white rounded-full p-2'>
            <BsTranslate className='h-4 w-4' />
          </span>
          <span className='border-2 border-[#3B3B3B] bg-white rounded-full p-2'>
            <IoIosMail className='h-4 w-4' />
          </span>
          <span className='border-2 border-[#3B3B3B] bg-white rounded-full p-2'>
            <FaBell className='h-4 w-4' />
          </span>
          <FaUserCircle className='h-8 w-8' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

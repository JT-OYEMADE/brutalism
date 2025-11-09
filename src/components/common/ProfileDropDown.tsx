import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react';
import { TbSquareRoundedChevronRightFilled } from 'react-icons/tb';

export const ProfileDropDown = () => {
  const navigate = useNavigate();

  const user = {
    firstName: 'Ari',
    lastName: 'Budin',
    email: 'aribudin@yahoo.com',
    avatar: null,
  };

  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);

  const { firstName, lastName, email, avatar } = user || {};

  return (
    <>
      <Menu as='div' className='relative'>
        <div>
          <MenuButton className='relative flex'>
            <div
              className={`w-fit flex justify-center items-center gap-3 cursor-pointer focus:outline-none outline-none ring-0 focus:ring-0`}>
              {!!avatar ? (
                <img
                  src={`/images/${avatar}`}
                  alt=''
                  className='rounded-full w-[34px] h-[34px]'
                />
              ) : (
                <div
                  className={`w-[34px] h-[34px] rounded-full flex justify-center items-center font-semibold text-white uppercase bg-black`}>
                  {firstName?.charAt(0)}
                  {lastName?.charAt(0)}
                </div>
              )}
            </div>
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <MenuItems
            className={`absolute sm:right-0  z-10 mt-2 w-[230px] origin-top-right rounded-xl bg-white pb-8 shadow-xl
              right-0
          `}>
            <div className='bg-gray-100 border border-primary-light px-4 pt-6 pb-3 rounded-tr-xl rounded-tl-xl'>
              <p className='font-semibold text-sm capitalize'>
                {' '}
                {firstName} {lastName}
              </p>
              <p className='text-[10px]'>{email}</p>
            </div>
            <div className={`px-4 pt-6}`}>
              <div
                className='flex justify-between cursor-pointer mt-6'
                onClick={() => {
                  setIsSigningOut(true);
                  navigate('/login');
                }}>
                <p className='text-[12px]'>{isSigningOut ? 'Signing Out...' : 'Sign Out'}</p>
                <span className='flex h-5 w-5 justify-center items-center bg-black rounded-full'>
                  <TbSquareRoundedChevronRightFilled className='text-white h-3 w-3' />
                </span>
              </div>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
};

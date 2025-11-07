import Navbar from './Navbar';
import NavMenu from './NavMenu';
import { useLocation } from 'react-router-dom';
import type { LayoutProps } from 'types';
import { Fragment, useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Dialog, Transition, TransitionChild, DialogPanel } from '@headlessui/react';

const DashboardLayout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const location = useLocation();

  // Close the sidebar when the route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div>
        <Transition show={sidebarOpen} as={Fragment}>
          <Dialog as='div' className='relative z-50 lg:hidden' onClose={setSidebarOpen}>
            <TransitionChild
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <div className='fixed inset-0 bg-gray-900/80' />
            </TransitionChild>

            <div className='fixed inset-0 flex'>
              <TransitionChild
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'>
                <DialogPanel className='relative mr-16 flex w-full max-w-xs flex-1'>
                  <TransitionChild
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                      <button
                        type='button'
                        className='-m-2.5 p-2.5'
                        onClick={() => setSidebarOpen(false)}>
                        <span className='sr-only'>Close sidebar</span>
                        <IoCloseSharp className='h-6 w-6 text-white' aria-hidden='true' />
                      </button>
                    </div>
                  </TransitionChild>
                  {/* SIDEBAR COMPONENT */}
                  <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white'>
                    <NavMenu />
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:fixed lg:inset-y-0 lg:z-30 lg:flex lg:w-[250px]  lg:flex-col'>
          <NavMenu />
        </div>

        <div className=''>
          <Navbar setSidebarOpen={setSidebarOpen} />
          <main className='pt-4 lg:pt-0 pb-20 md:px-6 lg:px-0'>
            <div className='px-4 lg:pl-[17rem] lg:pr-8'>
              {/* {!aggregator ? (
                <div className='mt-60'>
                  <LoadingSpinner />
                </div>
              ) : (
                children
              )} */}
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
// export default WithAuth(DashboardLayout);

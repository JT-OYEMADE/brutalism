'use client';

// import useLogout from 'hooks/auth/useLogout';
// import { uselocation.pathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import navItems from 'lib/constants/dashboardNavItems';
import {
  FaArrowDownLong,
  FaArrowRightLong,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa6';
import { Textfield } from 'components/common/Textfield';
import Button from 'components/common/Button';

const NavMenu = () => {
  const location = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null | undefined>(null);
  const [submenuHeights, setSubmenuHeights] = useState<{ [key: string]: number }>({});

  const submenuRefs = useRef<{ [key: string]: HTMLUListElement | null }>({});

  // Recalculate submenu heights when activeSubmenu changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const heights: { [key: string]: number } = {};
      Object.keys(submenuRefs.current).forEach((key) => {
        const submenu = submenuRefs.current[key];
        if (submenu) {
          heights[key] = submenu.scrollHeight;
        }
      });
      setSubmenuHeights(heights);
    }, 100); // Delay to ensure content is rendered

    return () => clearTimeout(timeoutId);
  }, [activeSubmenu]);

  // Automatically expand the submenu if the current route is under a parent item
  useEffect(() => {
    navItems.forEach(({ sub, key }) => {
      if (sub && sub.some((submenuItem) => submenuItem.href === location.pathname)) {
        setActiveSubmenu(key);
      }
    });
  }, [location.pathname]);

  const toggleSubmenu = (key: string | undefined) => {
    if (key === undefined || key === null) return;
    setActiveSubmenu((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className='h-full bg-[#F5F5F5] font-lato border-r border-[#989B98] overflow-y-auto'>
      <div>
        <div className='flex shrink-0 items-center py-5 w-auto justify-cter pl-5'>
          <Link to='/'>
            <h1 className='font-bold text-2xl xl:text-3xl tracking-tighter pb-2 lg:pb-0'>
              Brutalism
            </h1>
          </Link>
        </div>

        <nav className='flex flex-1 flex-col'>
          <ul role='list' className='flex flex-1 flex-col gap-y-7'>
            <li>
              <ul role='list' className='flex flex-col gap-y-2'>
                {navItems.map(({ href, name, icon, sub, key }) => {
                  const isActive = key ? location.pathname.includes(key) : false;

                  if (!sub) {
                    let isLinkActive = false;
                    if (href) isLinkActive = href === location.pathname;
                    return (
                      <Link
                        to={href || '#'}
                        key={name}
                        className={`flex gap-3 items-center justify-center text-sm w-[98%]`}>
                        <div
                          className={`w-[90%] flex gap-2 px-3 py-2 items-center h-full rounded ${
                            isLinkActive ? ' bg-white border border-[#858585]' : 'text-black'
                          }`}>
                          <div className='flex gap-2 w-full'>
                            <span>{icon}</span>
                            <span>{name}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  }

                  return (
                    <div key={name}>
                      <div
                        className={`flex gap-3 items-center justify-center text-sm w-[96%] cursor-pointer ${
                          isActive ? 'mb-2' : ''
                        }`}
                        onClick={() => toggleSubmenu(key)}>
                        <div
                          className={`w-[90%] flex gap-2 px-3 py-2 items-center h-full rounded-lg ${
                            isActive ? 'bg-white border border-[#858585]' : 'text-black'
                          }`}>
                          <div className='flex gap-2 w-full'>
                            <span>{icon}</span>
                            <span>{name}</span>
                          </div>
                          {activeSubmenu === key ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                      </div>
                      <ul
                        ref={(el) => {
                          submenuRefs.current[key || ''] = el;
                        }}
                        className='flex flex-col gap-2 overflow-hidden transition-all duration-300'
                        style={{
                          maxHeight:
                            activeSubmenu === key
                              ? `${submenuHeights[key || ''] || 0}px`
                              : '0px',
                        }}>
                        {sub.map((submenuItem) => {
                          const isSubActive = location.pathname === submenuItem.href;
                          return (
                            <li
                              key={submenuItem.name}
                              className={`rounded w-[85%] mr-auto ml-4 px-5 py-2 ${
                                isSubActive ? 'bg-white border border-[#858585]' : ''
                              }`}>
                              <Link
                                to={submenuItem.href}
                                className='text-xs text-black font-lato flex items-center gap-1'>
                                <span className='w-4 h-5'></span>
                                {submenuItem.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className='m-4 p-4 bg-white border border-[#858585] rounded'>
        <h2 className='text-left text-xl font-semibold pb-2'>Upgrade to Pro</h2>
        <p className='text-sm pb-4'>
          Are you looking for more features? Check the Pro Version
        </p>
        <Button prefixIcon={<FaArrowRightLong className='w-3 h-3' />} label='Upgrade Now' />
      </div>
    </div>
  );
};

export default NavMenu;

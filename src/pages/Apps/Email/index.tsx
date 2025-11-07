import Button from 'components/common/Button';
import { cn } from 'lib/constants/utils';
import { useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { FaInbox, FaUserCircle } from 'react-icons/fa';
import { HiOutlineTag } from 'react-icons/hi';
import { IoIosSend } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { RiDraftLine, RiInformationLine, RiStarLine } from 'react-icons/ri';
import Inbox from './Inbox';

const Email = () => {
  const [selectedFolder, setSelectedFolder] = useState<string>('inbox');
  const folders = [
    { id: 'inbox', label: 'Inbox', icon: <FaInbox className='w-4 h-4' />, count: 24 },
    { id: 'starred', label: 'Starred', icon: <RiStarLine className='w-4 h-4' /> },
    { id: 'sent', label: 'Sent', icon: <IoIosSend className='w-4 h-4' /> },
    { id: 'important', label: 'Important', icon: <RiInformationLine className='w-4 h-4' /> },
    { id: 'drafts', label: 'Drafts', icon: <RiDraftLine className='w-4 h-4' />, count: 30 },
    { id: 'trash', label: 'Trash', icon: <IoTrashOutline className='w-4 h-4' /> },
  ];

  const labels = [
    { id: 'work', label: 'Work', icon: <HiOutlineTag className='w-4 h-4' /> },
    { id: 'family', label: 'Family', icon: <HiOutlineTag className='w-4 h-4' /> },
    { id: 'friends', label: 'Friends', icon: <HiOutlineTag className='w-4 h-4' /> },
    { id: 'office', label: 'Office', icon: <HiOutlineTag className='w-4 h-4' /> },
  ];
  return (
    <div className='flex gap-5 w-full h-screen bg-white border border-[#A4A4A4] rounded-md p-6 mt-5'>
      <div className='w-[15%]'>
        <div>
          <div className='flex gap-2 items-center mb-4'>
            <FaUserCircle className='h-9 w-9' />
            <div>
              <h3 className='text-[#484848] text-sm font-semibold'>Ari Budin</h3>
              <p className='text-[#ABABB2] text-xs'>Web developer</p>
            </div>
          </div>
          <Button
            prefixIcon={<BiSolidEdit className='w-4 h-4 !text-[#222E12]' />}
            label='Compose'
            className='!px-3 !py-2 !text-sm'
          />
        </div>
        <div>
          <div className='mt-4'>
            {folders.map((folder) => {
              const isSelected = selectedFolder === folder.id;
              return (
                <div
                  key={folder.id}
                  onClick={() => setSelectedFolder(folder.id)}
                  className={cn(
                    'flex items-center gap-2 text-sm cursor-pointer py-2 justify-normal  px-3',
                    isSelected
                      ? 'border border-[#A7A7A7] bg-[#F5F5F5] justify-between rounded'
                      : ''
                  )}>
                  <div className={`flex items-center gap-2 text-sm`}>
                    <span>{folder.icon}</span>
                    <span>{folder.label}</span>
                  </div>
                  <div className='text-[10px]'>{folder.count}</div>
                </div>
              );
            })}
          </div>
          <div className='mt-4'>
            <h4 className='text-[#484848] text-sm font-semibold mb-1 pl-3'>Labels</h4>
            {labels.map((label) => {
              const isSelected = selectedFolder === label.id;
              return (
                <div
                  key={label.id}
                  onClick={() => setSelectedFolder(label.id)}
                  className={cn(
                    'flex items-center gap-2 text-sm cursor-pointer py-2 justify-normal  px-3',
                    isSelected
                      ? 'border border-[#A7A7A7] bg-[#F5F5F5] justify-between rounded'
                      : ''
                  )}>
                  <div className={`flex items-center gap-2 text-sm`}>
                    <span>{label.icon}</span>
                    <span>{label.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='w-[85%]'>{selectedFolder === 'inbox' && <Inbox />}</div>
    </div>
  );
};
export default Email;

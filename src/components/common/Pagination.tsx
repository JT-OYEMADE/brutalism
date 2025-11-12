import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const startItem = Math.max(1, (currentPage - 1) * itemsPerPage + 1);
  const endItem = Math.min(totalItems, currentPage * itemsPerPage);

  return (
    <div className='flex gap-4 items-center'>
      <p className='text-sm text-muted-foreground'>
        {startItem}-{endItem} of {totalItems}
      </p>
      <div className='flex items-center gap-2'>
        <button
          className='h-8 w-8 border border-[#888888] flex justify-center items-center rounded-full p-1.5 bg-[#F5F5F5] hover:bg-[#EEEEEE] disabled:opacity-50 transition-colors'
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          aria-label='Previous page'>
          <RiArrowLeftSLine className='w-5 h-5' />
        </button>
        <span className='text-sm font-medium px-3'>
          {currentPage} / {totalPages || 1}
        </span>
        <button
          className='h-8 w-8 border border-[#888888] flex justify-center items-center rounded-full p-1.5 bg-[#F5F5F5] hover:bg-[#EEEEEE] disabled:opacity-50 transition-colors'
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          aria-label='Next page'>
          <RiArrowRightSLine className='w-5 h-5' />
        </button>
      </div>
    </div>
  );
};

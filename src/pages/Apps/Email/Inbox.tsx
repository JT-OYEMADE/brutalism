import { useEmail } from 'hooks/email';
import { GoSearch } from 'react-icons/go';
import { formatTimestamp } from 'lib/formatters';
import Skeleton from 'components/common/Skeleton';
import { IoRefreshOutline } from 'react-icons/io5';
import { Checkbox } from 'components/common/Checkbox';
import { Textfield } from 'components/common/Textfield';
import { EmailRow } from 'components/email/inbox/EmailRow';
import { Pagination } from 'components/common/Pagination';
import { RiMailFill } from 'react-icons/ri';

const Inbox = () => {
  const {
    error,
    emails,
    isLoading,
    queryData,
    searchTerm,
    refetch,
    handlePageChange,
    handleSearchChange,
  } = useEmail();

  const LoadingRender = () => (
    <>
      {[...Array(10)].map((_, key) => (
        <div key={key}>
          <Skeleton className='h-10 w-full mb-2' />
        </div>
      ))}
    </>
  );

  if (error) {
    return (
      <div className='flex flex-col items-center justify-center h-64'>
        <RiMailFill className='w-12 h-12 text-muted-foreground mb-4' />
        <p className='text-muted-foreground'>Error Fetching Inbox</p>
      </div>
    );
  }

  if (!emails) {
    return (
      <div className='flex flex-col items-center justify-center h-64'>
        <RiMailFill className='w-12 h-12 text-muted-foreground mb-4' />
        <p className='text-muted-foreground'>No Inbox found</p>
      </div>
    );
  }

  return (
    <div>
      <div className='flex justify-between items-center mb-4 w-full'>
        <h1 className='text-lg font-bold'>Inbox</h1>
        <Textfield
          id='search'
          placeholder='Search...'
          type='search'
          value={searchTerm}
          onChange={handleSearchChange}
          className='w-32 md:w-48 lg:w-64 ring-0 focus:ring-0 border border-[#6F6F6F] bg-[#FAFAFA] px-3 py-2'
          surfixIcon={<GoSearch className='w-4 h-4' />}
        />
      </div>
      <div className='flex justify-between items-center border-[#A4A4A4] py-3 mb-4'>
        <div className='flex gap-2 items-center'>
          <span>
            <Checkbox className='' />
          </span>
          <span
            onClick={() => refetch()}
            className='h-8 w-8 border border-[#888888] flex justify-center items-center cursor-pointer rounded-full p-1.5 bg-[#F5F5F5]'>
            <IoRefreshOutline className='text-[#222E12] w-6 h-6' />
          </span>
        </div>
        <Pagination
          currentPage={queryData.page}
          totalPages={emails?.pagination?.totalPages}
          totalItems={emails?.pagination?.total}
          itemsPerPage={15}
          onPageChange={handlePageChange}
        />
      </div>
      <div>
        {isLoading ? (
          <LoadingRender />
        ) : (
          <div className='flex-1 overflow-y-auto'>
            {emails?.data?.map((email: any) => (
              <EmailRow
                key={email?.id}
                sender={email?.from}
                subject={email?.subject}
                timestamp={email?.timestamp && formatTimestamp(email?.timestamp)}
                starred={email?.isStarred}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;

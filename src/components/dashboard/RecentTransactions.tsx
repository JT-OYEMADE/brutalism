import { TransactionType } from 'lib/enums';
import Table from 'components/common/Table';
import { CgMoreVertical } from 'react-icons/cg';
import { FaArrowRightArrowLeft, FaArrowUpLong, FaArrowDownLong } from 'react-icons/fa6';

const { SENT, EXCHANGE, RECEIVED, WITHDRAW } = TransactionType;

const formatTransactionType = (type: TransactionType) => {
  switch (type) {
    case SENT:
      return (
        <div className='flex gap-3 items-center'>
          <div className='flex h-8 min-w-8 rounded-md bg-red-100 items-center justify-center'>
            <FaArrowUpLong className='text-red-400 h-3 w-3' />
          </div>
          <span className='font-semibold'>Sent GBP</span>
        </div>
      );
    case EXCHANGE:
      return (
        <div className='flex gap-3 items-center'>
          <div className='flex h-8 min-w-8 rounded-md bg-orange-100 items-center justify-center'>
            <FaArrowRightArrowLeft className='text-orange-400 h-3 w-3' />
          </div>
          <span className='font-semibold'>Exchanged GBP → NGN</span>
        </div>
      );
    case RECEIVED:
      return (
        <div className='flex gap-3 items-center'>
          <div className='flex h-8 min-w-8 rounded-md bg-green-100 items-center justify-center'>
            <FaArrowDownLong className='text-green-400 h-3 w-3' />
          </div>
          <span className='font-semibold'>Receive GBP → NGN</span>
        </div>
      );

    case WITHDRAW:
      return (
        <div className='flex gap-3 items-center'>
          <div className='flex h-8 min-w-8 rounded-md bg-gray-100 items-center justify-center'>
            <FaArrowDownLong className='text-gray-400 h-3 w-3' />
          </div>
          <span className='font-semibold'>Withdraw GBP</span>
        </div>
      );

    default:
      return '-';
  }
};

const columns = [
  {
    key: 'type',
    label: '',
    rowFormatter: (row: any) => formatTransactionType(row.type),
  },
  {
    key: 'recipient',
    label: '',
    formatter: () => (
      <p>
        <span className='text-[13px] text-gray-500'>
          Sent to John Doe · <span className='text-gray-300'>Today, 13:30</span>
        </span>
      </p>
    ),
  },
  {
    key: 'amount',
    label: '',
    formatter: (value: string) => (
      <span
        className={`font-semibold ${
          value.startsWith('-')
            ? 'text-red-500'
            : value.includes('+₦200,000')
            ? 'text-black'
            : ''
        }`}>
        {value}
      </span>
    ),
  },
];

const data = [
  {
    type: TransactionType.SENT,
    recipient: 'John Doe',
    amount: '-₦1,000,000',
  },
  {
    type: TransactionType.EXCHANGE,
    recipient: 'John Doe',
    amount: '-£1,000 / +₦200,000',
  },
  {
    type: TransactionType.RECEIVED,
    recipient: 'John Doe',
    amount: '+₦200,000',
  },
  {
    type: TransactionType.WITHDRAW,
    recipient: 'John Doe',
    amount: '+₦200,000',
  },
];

const RecentTransactions = () => {
  return (
    <div className='bg-white rounded-lg py-8 px-3 md:px-6 text-gray-600'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-xl'>Recent Transactions</h3>
        <p className='text-gray cursor-pointer text-sm text-gray-400'>See all</p>
      </div>
      <div className='mt-2'>
        <Table
          columns={columns}
          data={data}
          actions={() => <CgMoreVertical className='w-4 h-4 cursor-pointer' />}
        />
      </div>
    </div>
  );
};

export default RecentTransactions;

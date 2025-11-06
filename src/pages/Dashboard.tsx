import Balance from 'components/dashboard/Balance';
import FxRates from 'components/dashboard/FxRates';
import Merchants from 'components/dashboard/Merchants';
import DashboardHeader from 'components/dashboard/DashboardHeader';
import RecentTransactions from 'components/dashboard/RecentTransactions';
import TransactionChart from 'components/dashboard/TransactionChart';

const Dashboard = () => {
  return (
    <div className='space-y-8'>
      <DashboardHeader />
      <div className='flex flex-col md:flex-row gap-y-6 gap-x-3 xl:gap-8'>
        <div className='md:w-1/2'>
          <Balance />
        </div>
        <div className='md:w-1/2'>
          <Merchants />
        </div>
      </div>
      <FxRates />
      <div className='flex flex-col lg:flex-row gap-y-6 gap-x-3 xl:gap-6'>
        <div className='lg:w-1/2 xl:w-2/3'>
          <RecentTransactions />
        </div>
        <div className='lg:w-1/2 xl:w-1/3'>
          <TransactionChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

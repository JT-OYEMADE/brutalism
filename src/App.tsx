import Dashboard from 'pages/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import DashboardLayout from 'components/layouts/DashboardLayout';

function App() {
  return (
    <BrowserRouter>
      {/* Switch routes here */}
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;

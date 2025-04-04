import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InsurerLogin from './components/InsurerLogin';
import DoctorLogin from './components/DoctorLogin';
import InsurerDashboard from './components/InsurerDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import PrivateRoute from './components/PrivateRoute';
import ClientPage from './components/ClientPage'; // Import ClientPage
import HomePage from './components/HomePage'; // Import HomePage
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/insurer/login" element={<InsurerLogin />} />
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route 
          path="/insurer/dashboard" 
          element={
            <PrivateRoute role="insurer">
              <InsurerDashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/doctor/dashboard" 
          element={
            <PrivateRoute role="doctor">
              <DoctorDashboard />
            </PrivateRoute>
          } 
        />
        {/* Add Home page route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/client/:clientId" element={<ClientPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

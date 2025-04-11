import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming Navbar.jsx is in the components folder
import InsurerLogin from './pages/InsurerAuth';
import DoctorAuth from './pages/DoctorAuth';
import InsurerDashboard from './pages/InsurerDashboard';
import ClientDetails from './pages/ClientDetails';
import DoctorDashboard from './pages/DoctorDashboard';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/insurer/login" element={<InsurerLogin />} />
            <Route path="/doctor/login" element={<DoctorAuth />} />
            <Route
              path="/insurer/dashboard"
              element={
                <PrivateRoute role="insurer">
                  <InsurerDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/insurer/client/:clientId"
              element={
                <PrivateRoute role="insurer">
                  <ClientDetails />
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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
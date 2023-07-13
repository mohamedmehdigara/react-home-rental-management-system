import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Tenants from './components/Tenants';
import Leases from './components/Leases';
import MaintenanceRequests from './components/MaintenanceRequests';
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tenants">Tenants</Link>
            </li>
            <li>
              <Link to="/leases">Leases</Link>
            </li>
            <li>
              <Link to="/maintenance-requests">Maintenance Requests</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/tenants" element={<Tenants/>} />
          <Route path="/leases" element={<Leases/>} />
          <Route path="/maintenance-requests" element={<MaintenanceRequests/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

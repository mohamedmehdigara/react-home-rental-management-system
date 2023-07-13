import React, { useState, useEffect } from 'react';

function Leases() {
  const [leases, setLeases] = useState([]);

  useEffect(() => {
    // Simulating fetching leases from an API
    fetchLeases()
      .then(response => {
        setLeases(response);
      })
      .catch(error => {
        console.error('Error fetching leases:', error);
      });
  }, []);

  const fetchLeases = () => {
    // Simulating an API call to fetch leases
    return new Promise((resolve, reject) => {
      // Simulating a delay for the API call
      setTimeout(() => {
        const leasesData = [
          { id: 1, tenantName: 'John Doe', propertyName: 'Property A', startDate: '2023-01-01', endDate: '2023-12-31' },
          { id: 2, tenantName: 'Jane Smith', propertyName: 'Property B', startDate: '2023-02-01', endDate: '2023-07-31' },
          { id: 3, tenantName: 'Bob Johnson', propertyName: 'Property C', startDate: '2023-03-01', endDate: '2024-02-29' },
        ];
        resolve(leasesData);
      }, 1000);
    });
  };

  return (
    <div>
      <h1>Leases</h1>
      <ul>
        {leases.map(lease => (
          <li key={lease.id}>
            Tenant: {lease.tenantName}<br />
            Property: {lease.propertyName}<br />
            Start Date: {lease.startDate}<br />
            End Date: {lease.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leases;

import React, { useState, useEffect } from 'react';

function Tenants() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    // Simulating fetching tenants from an API
    fetchTenants()
      .then(response => {
        setTenants(response);
      })
      .catch(error => {
        console.error('Error fetching tenants:', error);
      });
  }, []);

  const fetchTenants = () => {
    // Simulating an API call to fetch tenants
    return new Promise((resolve, reject) => {
      // Simulating a delay for the API call
      setTimeout(() => {
        const tenantsData = [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
        ];
        resolve(tenantsData);
      }, 1000);
    });
  };

  return (
    <div>
      <h1>Tenants</h1>
      <ul>
        {tenants.map(tenant => (
          <li key={tenant.id}>
            {tenant.name} - {tenant.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tenants;

import React, { useState, useEffect } from 'react';

function MaintenanceRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Simulating fetching maintenance requests from an API
    fetchMaintenanceRequests()
      .then(response => {
        setRequests(response);
      })
      .catch(error => {
        console.error('Error fetching maintenance requests:', error);
      });
  }, []);

  const fetchMaintenanceRequests = () => {
    // Simulating an API call to fetch maintenance requests
    return new Promise((resolve, reject) => {
      // Simulating a delay for the API call
      setTimeout(() => {
        const requestsData = [
          { id: 1, propertyName: 'Property A', description: 'Plumbing issue', status: 'Pending' },
          { id: 2, propertyName: 'Property B', description: 'Electrical problem', status: 'In Progress' },
          { id: 3, propertyName: 'Property C', description: 'Broken window', status: 'Completed' },
        ];
        resolve(requestsData);
      }, 1000);
    });
  };

  return (
    <div>
      <h1>Maintenance Requests</h1>
      <ul>
        {requests.map(request => (
          <li key={request.id}>
            Property: {request.propertyName}<br />
            Description: {request.description}<br />
            Status: {request.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MaintenanceRequests;

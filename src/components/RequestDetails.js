import React, { useState } from 'react';

const RequestDetails = ({ request }) => {
  const [status, setStatus] = useState(request.status);

  const handleStatusChange = () => {
    setStatus((prevStatus) => {
      if (prevStatus === 'Pending') return 'In Progress';
      if (prevStatus === 'In Progress') return 'Completed';
      return 'Completed';
    });
  };

  return (
    <div className="request-card">
      <p><strong>Description:</strong> {request.description}</p>
      <p><strong>Priority:</strong> {request.priority}</p>
      <p><strong>Status:</strong> {status}</p>
      <button onClick={handleStatusChange}>
        {status === 'Completed' ? 'Completed' : 'Update Status'}
      </button>
    </div>
  );
};

export default RequestDetails;

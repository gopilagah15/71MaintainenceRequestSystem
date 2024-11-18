import React from 'react';
import RequestDetails from './RequestDetails';

const RequestList = ({ requests }) => {
  return (
    <div>
      <h2>Maintenance Requests</h2>
      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        requests.map((request) => <RequestDetails key={request.id} request={request} />)
      )}
    </div>
  );
};

export default RequestList;

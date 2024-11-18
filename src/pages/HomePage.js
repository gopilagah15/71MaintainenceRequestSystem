import React, { useState } from 'react'; 
import RequestList from '../components/RequestList';
import RequestForm from '../components/ReqestForm';

const HomePage = () => {
  const [requests, setRequests] = useState([]);

  const addRequest = (newRequest) => {
    setRequests([...requests, newRequest]);
  };

  return (
    <div>
      <h1>Maintenance Request System</h1>
      <RequestForm addRequest={addRequest} />
      <RequestList requests={requests} />
    </div>
  );
};

export default HomePage;

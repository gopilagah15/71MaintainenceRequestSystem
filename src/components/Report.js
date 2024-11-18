import React from 'react';

const Report = ({ data }) => {
  const completedRequests = data.filter((req) => req.status === 'Completed');
  const averageCompletionTime = () => {
    const totalDays = completedRequests.reduce((acc, req) => {
      const created = new Date(req.createdAt);
      const updated = new Date(req.updatedAt);
      const difference = (updated - created) / (1000 * 3600 * 24);
      return acc + difference;
    }, 0);
    return (totalDays / completedRequests.length).toFixed(2);
  };

  return (
    <div>
      <h2>Report Summary</h2>
      <p>Total Requests: {data.length}</p>
      <p>Completed Requests: {completedRequests.length}</p>
      <p>Average Completion Time (days): {completedRequests.length ? averageCompletionTime() : 'N/A'}</p>
    </div>
  );
};

export default Report;

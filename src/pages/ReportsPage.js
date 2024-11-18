import React from 'react';
import Report from '../components/Report';

const sampleData = [
  { id: 1, description: 'Fix leak', priority: 'High', status: 'Completed', createdAt: '2024-11-01', updatedAt: '2024-11-05' },
  { id: 2, description: 'Replace bulb', priority: 'Low', status: 'Completed', createdAt: '2024-11-02', updatedAt: '2024-11-03' },
];

const ReportsPage = () => {
  return (
    <div>
      <h1>Maintenance Report</h1>
      <Report data={sampleData} />
    </div>
  );
};

export default ReportsPage;

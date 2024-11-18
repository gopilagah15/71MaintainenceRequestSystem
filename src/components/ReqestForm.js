import React, { useState } from 'react';

const RequestForm = ({ addRequest }) => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now(),
      description,
      priority,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    addRequest(newRequest);
    setDescription('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Describe the issue..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default RequestForm;

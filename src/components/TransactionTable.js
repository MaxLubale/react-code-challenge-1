import React, { useState } from 'react';

const TransactionTable = ({ transactions, onDelete, onSort }) => {
  const [sortKey, setSortKey] = useState(null);

  const handleSort = (key) => {
    setSortKey(key);
    onSort(key);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortKey) {
      return a[sortKey].localeCompare(b[sortKey]);
    }
    return 0;
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('id')}>ID</th>
          <th onClick={() => handleSort('description')}>Description</th>
          <th onClick={() => handleSort('amount')}>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.description}</td>
            <td>${Number(transaction.amount).toFixed(2)}</td>
            <td>
              <button onClick={() => handleDelete(transaction.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;

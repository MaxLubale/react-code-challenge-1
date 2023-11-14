import React, { useState } from 'react';

const TransactionTable = ({ transactions, onDelete }) => {
  const [sortBy, setSortBy] = useState(null);

  const handleSort = (property) => {
    if (sortBy === property) {
      // If already sorted by the same property, reverse the order
      transactions.reverse();
    } else {
      // Sort the transactions by the selected property
      transactions.sort((a, b) => (a[property] > b[property] ? 1 : -1));
    }
    setSortBy(property);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button onClick={() => handleSort('description')}>Description</button>
          </th>
          <th>
            <button onClick={() => handleSort('category')}>Category</button>
          </th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.date}</td>
            <td>
              <button onClick={() => onDelete(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;

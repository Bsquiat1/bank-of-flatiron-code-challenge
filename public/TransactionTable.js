import React, { useState } from "react";

function TransactionTable(props) {
  const [sortBy, setSortBy] = useState(null);

  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);
    props.sortTransactions(value);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>
            <button className="btn btn-link" value="description" onClick={handleSort}>
              Description
            </button>
          </th>
          <th>
            <button className="btn btn-link" value="category" onClick={handleSort}>
              Category
            </button>
          </th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>${transaction.amount.toFixed(2)}</td>
            <td>{transaction.date}</td>
            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => props.deleteTransaction(transaction.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;

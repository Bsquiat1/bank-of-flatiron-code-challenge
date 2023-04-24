import React from 'react';

function Transaction(props) {
  const { date, name, amount, category } = props.transaction;

  return (
    <div>
      <p>Date: {date}</p>
      <p>Amount: {amount}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default Transaction;

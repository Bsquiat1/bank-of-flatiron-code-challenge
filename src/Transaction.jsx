import React from 'react';

function Transaction(props) {
  const { date, description, amount, category } = props.transaction;

  return (
    <div>
      <p>Date: {date}</p>
      <p>Amount: {amount}</p>
      <p>Category: {category}</p>
      <p>Description: {description} </p>
    </div>
  );
}

export default Transaction;

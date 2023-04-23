import React from "react";

function TransactionForm({ onAddTransaction }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      const newTransaction = { date, description, category, amount };
      onAddTransaction(newTransaction);
      setDate('');
      setDescription('');
      setCategory('');
      setAmount('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
import React, { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", amount: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, amount, category } = form;

    if (!title || !amount || !category) {
      alert("Please fill all fields!");
      return;
    }

    onAdd({ ...form, amount: parseFloat(amount) });
    setForm({ title: "", amount: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
}

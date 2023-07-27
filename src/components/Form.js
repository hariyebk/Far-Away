import { useState } from "react";

export default function Form({ onNewItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onNewItem(newItem);
    // retrun input fields to thier original form
    setDescription("");
    setQuantity(1);
  };
  return <form className="add-form" onSubmit={handleSubmit}>
    <h3> What do you need for your 🥰 trip ?</h3>
    <select style={{ backgroundColor: "#76c7ad" }} value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
    </select>
    <input type="text" placeholder="Item" value={description} onChange={(e) => setDescription(e.target.value)} />
    <button> Add </button>
  </form>;
}

export default function List({ item, onDeleteItem, onPackItem }) {
  return <li style={{ marginBottom: "5rem" }}>
    {/* onClick here */}
    <input type="checkbox" value={item.packed} onChange={() => onPackItem(item.id)} />
    <span style={item.packed ? { textDecoration: "line-through" } : {}}> {item.quantity} {item.description} </span>
    {/* onClick here */}
    <button onClick={() => onDeleteItem(item.id)}>❌</button>
  </li>;
}

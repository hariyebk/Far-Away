import { useState } from "react";
import  List  from "./List";

export default function PackagingList({ items, onDeleteItem, onPackItem, onClearList }) {
  const [sortBy, setSortBy] = useState("items");
  let sortedItems;
  if (sortBy === "items") sortedItems = items;
  if (sortBy === "descritpion") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return <div className="list">
    <ul>
      {sortedItems.map(item => <List item={item} onDeleteItem={onDeleteItem} onPackItem={onPackItem} key={item.id} />)}
    </ul>
    {sortedItems.length > 1 ? <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="item"> sort by items </option>
        <option value="descritpion"> sort by description alphabet </option>
        <option value="packed"> sort by packed items </option>
      </select>
      <button onClick={onClearList}> clear list </button>
    </div> : null}
  </div>;
}

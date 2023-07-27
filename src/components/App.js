import { useState } from "react";
import  Logo  from "./Logo";
import Form  from "./Form";
import  PackagingList  from "./PackagingList";
import  Stats from "./Stats";

export default function App() {
  // let initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: false },
  //   { id: 2, description: "Socks", quantity: 2, packed: false },
  //   { id: 3, description: "chrager", quantity: 1, packed: false}
  // ];
  const [items, setItems] = useState([])
  const handleNewItem = (item) => {
      setItems(() => [...items, item])
  }
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }
  const handleItemPack = (id) => {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }
  const handleClearList = () => {
        const confirmed = window.confirm("Are You sure you want to delete all the items ?")
        if(confirmed) setItems([])
  }
  return (
    <div className="App">
      <Logo />
      <Form onNewItem={handleNewItem}/>
      <PackagingList items = {items} onDeleteItem = {handleDeleteItem} onPackItem = {handleItemPack} onClearList = {handleClearList}/>
      <Stats items = {items}/>
    </div>
  );
}



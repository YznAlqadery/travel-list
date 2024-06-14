import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";
/*const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Snacks", quantity: 20, packed: true },
];
/*
Difference between State and props
State --> Internal data, owned by component, component 'memory', updating state causes component to re-render,make components interactive
Props --> External data, owned by parent component, similar to function parameters,read-only,recieving new props causes component to re-render usually when the parent's
state has been updated
*/
export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) {
      setItems((items) => []);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handlePacked={handlePacked}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

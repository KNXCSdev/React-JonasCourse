import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingsList from "./PackingsList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]); //DATA CAN ONLY FLOW DOWN TO CHILDREN VIA PROPS NOT SIDEWAYS TO SIBLINGS THATS WHY useState IS IN A PARENT TO USE IT IN FORM AND PACKAGINGLIST

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items");

    if (confirmed) setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingsList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

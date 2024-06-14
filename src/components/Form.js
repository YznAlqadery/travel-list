import { useState } from "react";

export default function Form({ handleItems }) {
  //Controlled elements
  const [itemDesc, setItemDesc] = useState("");
  const [selectValue, setSelectValue] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!itemDesc) return;

    const newItem = {
      description: itemDesc,
      quantity: selectValue,
      packed: false,
      id: Date.now(),
    };
    handleItems(newItem);
    setItemDesc((item) => (item = ""));
    setSelectValue((value) => (value = 1));
  }
  //onSubmit occurs when the form is submitted (button clicked, pressed enter, etc)
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemDesc}
        onChange={(e) => setItemDesc(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

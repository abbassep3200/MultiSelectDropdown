import React, { useState } from "react";
import "./App.scss";
import Dropdown from "./components/multi-select";
import { Option } from "./types/dropdown.types";

const initialOptions: Option[] = [
  { id: 1, label: "sport ⚽", isSelected: false },
  { id: 2, label: "art 🧬", isSelected: false },
  { id: 3, label: "game 💻", isSelected: false },
];

const App: React.FC = () => {
  const [options, setOptions] = useState<Option[]>(initialOptions);

  const toggleSelection = (optionId: number) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId
          ? { ...option, isSelected: !option.isSelected }
          : option
      )
    );
  };

  const addItem = (newItem: Option) => {
    setOptions((prevOptions) => [...prevOptions, newItem]);
  };

  return (
    <>
      <h1 className="title">Multiple Select Dropdown</h1>
      <h4>Using Typescript + React Custom Hook + Scss</h4>
      <Dropdown
        toggleSelection={toggleSelection}
        addItem={addItem}
        options={options}
      />
    </>
  );
};

export default App;

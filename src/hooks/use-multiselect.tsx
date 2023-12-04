import { FormEvent, useRef, useState } from "react";
import useClickOutside from "./use-click-outside";
import { Option } from "../types/dropdown.types";
import { getRandom4DigitNumber } from "../utilities/numbers";

const useMultiSelect = (
  options: Option[],
  addItem: (newItem: Option) => void,
  toggleSelection: (optionId: number) => void
) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useClickOutside(dropdownRef, handleClickOutside, isOpen);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSelectItem = (optionId: number) => {
    toggleSelection(optionId);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value !== "") {
      const newItem: Option = {
        id: getRandom4DigitNumber(),
        label: value,
        isSelected: false,
      };
      addItem(newItem);
      setValue("");
    }
  };

  return {
    dropdownRef,
    isOpen,
    value,
    setValue,
    toggleDropdown,
    toggleSelectItem,
    handleSubmit,
  };
};

export default useMultiSelect;

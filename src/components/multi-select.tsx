import useMultiSelect from "../hooks/use-multiselect";
import { DropdownProps } from "../types/dropdown.types";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  className = "",
  addItem,
  toggleSelection,
}) => {
  const {
    dropdownRef,
    isOpen,
    value,
    setValue,
    toggleDropdown,
    toggleSelectItem,
    handleSubmit,
  } = useMultiSelect(options, addItem, toggleSelection);

  return (
    <div className={`dropdown-wrapper relative ${className}`} ref={dropdownRef}>
      <div>
        <div className="selected-list">
          {options
            .filter((p) => p.isSelected === true)
            .map((option) => (
              <span>{option.label}</span>
            ))}
        </div>
      </div>
      <div onClick={toggleDropdown} className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            className="dropdown-input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type something to add a new item..."
          />
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </div>
      <div className={`dropdown ${isOpen ? "dropdown-show" : ""}`}>
        {options.length === 0 ? (
          <p className="no-options">
            There are no options to display. <br /> Please type something to add
            to the list
          </p>
        ) : (
          <ul>
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => toggleSelectItem(option.id)}
                className={`dropdown-item ${
                  option.isSelected ? "selected" : ""
                }`}
              >
                {option.label}
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

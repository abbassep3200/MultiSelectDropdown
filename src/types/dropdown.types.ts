export type Option = {
  id: number;
  label: string;
  isSelected: boolean;
};

export type DropdownProps = {
  options: Option[];
  addItem: (newItem: Option) => void;
  toggleSelection: (optionId: number) => void;
  className?: string;
};

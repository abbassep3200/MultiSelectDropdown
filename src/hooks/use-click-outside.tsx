import { useEffect } from "react";

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handleClickOutside: () => void,
  condition: boolean
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = (event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      condition
    ) {
      handleClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);
};

export default useClickOutside;

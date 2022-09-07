import { useEffect, useState } from "react";

type THookSearch = {
  debounceValue: string;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
};

export const useSearch = (): THookSearch => {
  const [inputValue, setInputValue] = useState<string>("");
  const [debounceValue, setDebounceValue] = useState<string>("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 400);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);
  return { debounceValue, inputValue, setInputValue };
};

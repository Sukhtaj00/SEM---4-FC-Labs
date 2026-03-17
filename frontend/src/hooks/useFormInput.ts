import { useState } from "react";

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");

  const validate = (callback: (value: string) => string | null) => {
    const result = callback(value);

    if (result) {
      setMessage(result);
      return false;
    }

    setMessage("");
    return true;
  };

  const reset = () => {
    setValue(initialValue);
    setMessage("");
  };

  return {
    value,
    setValue,
    message,
    validate,
    reset
  };
};
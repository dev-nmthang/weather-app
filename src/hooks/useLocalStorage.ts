import { useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [localStorageValue, setLocalStorageValue] = useState<T>(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }

      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } catch {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const setLocalStorage = (value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));

    setLocalStorageValue(value);
  };

  return [localStorageValue, setLocalStorage] as const;
}

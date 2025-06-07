import { useState, useEffect } from "react";
import { IStats } from "./types";

// Add constraint: T extends IStats
function getStorageValue<T extends IStats>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") return defaultValue;

  const saved = localStorage.getItem(key);
  if (!saved) return defaultValue;

  try {
    return JSON.parse(saved) as T;
  } catch {
    return defaultValue;
  }
}

export const useLocalStorage = <T extends IStats>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() =>
    getStorageValue(key, defaultValue)
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};

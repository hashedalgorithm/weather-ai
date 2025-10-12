import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const withBaseURL = (url: string) => {
  const base = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!base) throw new Error("Invalid ENV");

  return `${base}${url}`;
};

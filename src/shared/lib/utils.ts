import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("ru-RU").format(price);

export const pad2 = (n: number) => String(n).padStart(2, "0");

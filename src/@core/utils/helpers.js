import { clsx } from "clsx"; // Importing clsx library for conditional class merging
import { twMerge } from "tailwind-merge"; // Importing twMerge function from tailwind-merge library

/**
 * Helper function to conditionally add Tailwind CSS classes.
 *
 * @param {...string[]} inputs - List of classes to be conditionally merged.
 * @returns {string} - Merged Tailwind CSS classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs)); // Merging the provided classes using clsx and twMerge
}

// 👉 IsEmpty
/**
 * Checks if a value is empty or an empty array.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is null, undefined, an empty string, or an empty array; otherwise, false.
 */
export const isEmpty = value => {
  if (value === null || value === undefined || value === '') // Checking if the value is null, undefined, or an empty string
    return true; // Return true if the value meets the conditions

  return !!(Array.isArray(value) && value.length === 0); // Return true if the value is an empty array
};

// 👉 IsNullOrUndefined
/**
 * Checks if a value is null or undefined.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is null or undefined; otherwise, false.
 */
export const isNullOrUndefined = value => {
  return value === null || value === undefined; // Return true if the value is null or undefined
};

// 👉 IsEmptyArray
/**
 * Checks if a value is an empty array.
 *
 * @param {*} arr - The array to check.
 * @returns {boolean} - True if the value is an array and has a length of 0; otherwise, false.
 */
export const isEmptyArray = arr => {
  return Array.isArray(arr) && arr.length === 0; // Return true if the value is an array and has a length of 0
};

// 👉 IsObject
/**
 * Checks if a value is an object.
 *
 * @param {*} obj - The value to check.
 * @returns {boolean} - True if the value is not null, not an array, and of type 'object'; otherwise, false.
 */
export const isObject = obj => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj);

// 👉 IsToday
/**
 * Checks if a given date is today's date.
 *
 * @param {Date} date - The date to check.
 * @returns {boolean} - True if the given date is today's date; otherwise, false.
 */
export const isToday = date => {
  const today = new Date(); // Get today's date

  return (date.getDate() === today.getDate() // Check if the day, month, and year are the same as today's date
        && date.getMonth() === today.getMonth()
        && date.getFullYear() === today.getFullYear());
};

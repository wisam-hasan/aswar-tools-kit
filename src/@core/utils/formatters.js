import { isToday } from "./helpers"; // Importing the isToday helper function from the helpers file

/**
 * Generates an avatar text based on the provided value.
 *
 * @param {string} value - The value to generate the avatar text from.
 * @returns {string} - The generated avatar text.
 */
export const avatarText = value => {
  if (!value) // Checking if the value is falsy
    return ''; // Return an empty string if the value is falsy
  const nameArray = value.split(' '); // Splitting the value into an array of words

  return nameArray.map(word => word.charAt(0).toUpperCase()).join(''); // Capitalizing the first character of each word and joining them
};

/**
 * Formats and returns the date in a human-readable format.
 *
 * @param {string} value - The date to format.
 * @param {Intl.DateTimeFormatOptions} formatting - The formatting options to use.
 * @returns {string} - The formatted date.
 */
export const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value) // Checking if the value is falsy
    return value; // Return the value if it's falsy

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value)); // Format the date using Intl.DateTimeFormat
};

/**
 * Returns a short human-friendly representation of the month.
 * Converts the date to only time if it's today for better UX.
 *
 * @param {string} value - The date to format.
 * @param {boolean} toTimeForCurrentDay - Whether to convert to time if the day is today/current.
 * @returns {string} - The formatted date or time.
 */
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value); // Creating a new Date object from the provided value
  let formatting = { month: 'short', day: 'numeric' }; // Default formatting options
  if (toTimeForCurrentDay && isToday(date)) // Checking if the date is today
    formatting = { hour: 'numeric', minute: 'numeric' }; // Change formatting to show time

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value)); // Format the date or time
};

/**
 * Prefixes a value with a plus sign if it's positive.
 *
 * @param {number} value - The value to prefix.
 * @returns {string|number} - The value with a plus sign prefix if positive, otherwise the original value.
 */
export const prefixWithPlus = value => value > 0 ? `+${value}` : value; // Prefix the value with a plus sign if it's positive

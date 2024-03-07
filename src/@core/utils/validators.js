/**
 * Validates if the provided value is required.
 * @param {*} value - The value to be validated.
 * @returns {string|boolean} - Error message if validation fails, otherwise returns true.
 */
import { isEmptyArray, isNullOrUndefined, isEmpty } from "./helpers";

export const requiredValidator = value => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return 'This field is required';

  return !!String(value).trim().length || 'This field is required';
}

/**
 * Validates if the provided value is a valid email address.
 * @param {*} value - The value to be validated.
 * @returns {string|boolean} - Error message if validation fails, otherwise returns true.
 */
export const emailValidator = value => {
  if (isEmpty(value))
    return true;
  const re = /^(?:[^<>()\\[\]\\.,;:\s@"]+|\.{0}|".+")@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]|(?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;
  if (Array.isArray(value))
    return value.every(val => re.test(String(val))) || 'The Email field must be a valid email';

  return re.test(String(value)) || 'The Email field must be a valid email';
}

/**
 * Validates if the provided password meets the criteria.
 * @param {string} password - The password to be validated.
 * @returns {string|boolean} - Error message if validation fails, otherwise returns true.
 */
export const passwordValidator = password => {
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  const validPassword = regExp.test(password);

  return validPassword || 'Field must contain at least one uppercase, lowercase, special character and digit with min 8 chars';
}

/**
 * Validates if the provided value matches the target value.
 * @param {*} value - The value to be validated.
 * @param {*} target - The target value to match against.
 * @returns {string|boolean} - Error message if validation fails, otherwise returns true.
 */
export const confirmedValidator = (value, target) => value === target || 'The Confirm Password field confirmation does not match';

/**
 * Validates if the provided value is between the specified range.
 * @param {*} value - The value to be validated.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {string|boolean} - Error message if validation fails, otherwise returns true.
 */
export const betweenValidator = (value, min, max) => {
  const valueAsNumber = Number(value);

  return (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) || `Enter number between ${min} and ${max}`;
}

/**
 * Validates if the provided value is an integer.
 * @param {*} value - The value to be validated.
 * @returns {string|boolean} - Error message if validation fails, otherwise returns true.
 */
export const integerValidator = value => {
  if (isEmpty(value))
    return true;
  if (Array.isArray(value))
    return value.every(val => /^-?[0-9]+$/.test(String(val))) || 'This field must be an integer';

  return /^-?[0-9]+$/.test(String(value)) || 'This field must be an integer';
}

/**
 * Validates if the provided value matches the specified regex pattern.
 * @param {*} value - The value to be validated.
 * @param {RegExp|string} regex - The regex pattern to match against.
 * @returns {string|boolean} - Error message if validation fails, otherwise returns true.
 */
export const regexValidator = (value, regex) => {
  if (isEmpty(value))
    return true;
  let regeX = regex;
  if (typeof regeX === 'string')
    regeX = new RegExp(regeX);
  if (Array.isArray(value))
    return value.every(val => regexValidator(val, regeX));

  return regeX.test(String(value)) || 'The Regex field format is invalid';
}

/**
 * Validates if the provided value contains only alphabetic characters.
 * @param {*} value - The value to be validated.
 * @returns {string|boolean} - Error message if validation fails, otherwise returns true.
 */
export const alphaValidator = value => {
  if (isEmpty(value))
    return true;

  return /^[A-Z]*$/i.test(String(value)) || 'The Alpha field may only contain alphabetic characters';
}

/**
 * Validates if the provided value is a valid URL.
 * @param {*} value - The value to be validated.
 * @returns {string|boolean} - Error message if validation fails, otherwise returns true.
 */
export const urlValidator = value => {
  if (isEmpty(value))
    return true;
  const re = /^(http[s]?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}\.?/;

  return re.test(String(value)) || 'URL is invalid';
}

/**
 * Validates if the length of the provided value matches the specified length.
 * @param {*} value - The value to be validated.
 * @param {number} length - The required length of the value.
 * @returns {string|boolean} - Error message if validation fails, otherwise returns true.
 */
export const lengthValidator = (value, length) => {
  if (isEmpty(value))
    return true;

  return String(value).length === length || `The Min Character field must be at least ${length} characters`;
}

/**
 * Validates if the provided value contains only alphanumeric characters, dashes, or underscores.
 * @param {*} value - The value to be validated.
 * @returns {string|boolean} - Error message if validation fails, otherwise returns true.
 */
export const alphaDashValidator = value => {
  if (isEmpty(value))
    return true;
  const valueAsString = String(value);

  return /^[0-9A-Z_-]*$/i.test(valueAsString) || 'All Characters are not valid';
}

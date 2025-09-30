// Shared DOM utility functions for safe DOM operations

/**
 * Safely query DOM element with error handling
 * @param {string} selector - CSS selector
 * @returns {Element|null} Found element or null
 */
function safeDOMQuery(selector) {
  try {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`Element not found: ${selector}`);
    }
    return element;
  } catch (error) {
    console.error(`DOM query failed for ${selector}:`, error);
    return null;
  }
}

/**
 * Safely perform DOM operation with error handling
 * @param {Element} element - DOM element
 * @param {Function} operation - Operation to perform on element
 * @returns {*} Result of operation or null
 */
function safeDOMOperation(element, operation) {
  if (!element) {
    console.warn("Cannot perform operation on null element");
    return null;
  }
  try {
    return operation(element);
  } catch (error) {
    console.error("DOM operation failed:", error);
    return null;
  }
}

/**
 * Safely parse JSON from localStorage with error handling
 * @param {string} key - localStorage key
 * @param {*} defaultValue - Default value if parsing fails
 * @returns {*} Parsed data or default value
 */
function safeLocalStorageGet(key, defaultValue = null) {
  try {
    const value = localStorage.getItem(key);
    if (value === null) return defaultValue;
    return JSON.parse(value);
  } catch (error) {
    console.error(`Failed to read from localStorage key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Safely save JSON to localStorage with error handling
 * @param {string} key - localStorage key
 * @param {*} value - Value to save
 * @returns {boolean} True if saved successfully
 */
function safeLocalStorageSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Failed to write to localStorage key "${key}":`, error);
    if (error.name === "QuotaExceededError") {
      alert(
        "Storage quota exceeded. Please clear some space and try again.",
      );
    } else {
      alert("Failed to save your changes. Please try again.");
    }
    return false;
  }
}

// Export for use in other modules
if (typeof module === "object") {
  module.exports = {
    safeDOMQuery,
    safeDOMOperation,
    safeLocalStorageGet,
    safeLocalStorageSet,
  };
}
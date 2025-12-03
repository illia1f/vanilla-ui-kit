/**
 * Utility Functions
 * Shared JavaScript utilities for components
 */

/**
 * Query selector with optional scope
 * @param {string} selector - CSS selector
 * @param {HTMLElement} scope - Scope element (defaults to document)
 * @returns {HTMLElement|null} Found element or null
 */
function $(selector, scope = document) {
  return scope.querySelector(selector);
}

/**
 * Query selector all with optional scope
 * @param {string} selector - CSS selector
 * @param {HTMLElement} scope - Scope element (defaults to document)
 * @returns {NodeList} Found elements
 */
function $$(selector, scope = document) {
  return scope.querySelectorAll(selector);
}

export { $, $$ };

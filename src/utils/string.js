'use strict';

/**
 * @description creates camel case string from arg
 * @param {string} str
 * @throws { InvalidArgumentException }
 * @returns new string in camelCase form
 */
export const CamelCaseString = str => {
  if (typeof str !== 'string')
    throw new Error(
      `[InvalidArgumentException] ${typeof str} is not a valid argument type for this function`
    );
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
/**
 * @description creates Pascal Case string from arg
 * @param {string} str
 * @throws { InvalidArgumentException }
 * @returns new string in camelCase form
 */
export const PascalCase = str => {
  if (typeof str !== 'string')
    throw new Error(
      `[InvalidArgumentException] ${typeof str} is not a valid argument type for this function`
    );
  return str.replace(/\w+/g, w => {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
};

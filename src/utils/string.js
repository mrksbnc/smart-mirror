'use strict';

/**
 * @description creates camel case string from parameter string
 * @param {string} str
 * @throws { InvalidArgumentException }
 * @returns new string in CamelCase form
 */
export const CamelCaseString = str => {
  if (typeof str !== 'string')
    throw new Error(
      `[InvalidArgumentException] ${typeof str} is not a valid argument type for this function`
    );
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

'use strict';

/**
 * @description calculates the time difference between two dates then returns
 * the result in minutes or on case of error undefined
 * @param {string | Date} dateStr1
 * @param {string | Date} dateStr2
 * @returns {number | undefined} time difference in minutes
 */
export const CalculateTimeDiffInMinutes = (dateStr1, dateStr2) => {
  let sorted = [new Date(dateStr1), new Date(dateStr2)].sort();
  let diff = parseInt((sorted[1] - sorted[0]) / (1000 * 60));
  return diff ? diff : void 0;
};

'use strict';
/**
 * @description This class encapsulates all DateTime related logic in
 * this application
 */
class DateTimeFunctions {
  /**
   * @description returns the current time in 24h format as a String
   * @returns {string} currentTime
   */
  GetCurrentTime() {
    const dateObject = new Date();
    const cHour = dateObject.getHours();
    const cMinute = dateObject.getMinutes();
    const hour = (cHour < 10 ? '0' : '') + cHour;
    const minute = (cMinute < 10 ? '0' : '') + cMinute;
    const currentTime = `${hour}:${minute}`;
    return currentTime;
  }
  /**
   * @description returns the current date in dayname, month day format
   * @returns {string} cDate
   */
  GetCurrentDate() {
    const dateObject = new Date();
    const month = this.GetMonthName();
    const day = ('0' + dateObject.getDate()).slice(-2);
    const dayName = this.GetDayName();
    const cDate = `${dayName}, ${month} ${day}`;
    return cDate;
  }
  /**
   * @description returns the name of the current day
   * @returns {string} cDayName
   */
  GetDayName() {
    const date = new Date(Date.now());
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const cDayName = days[date.getDay()];
    return cDayName;
  }
  /**
   * @description returns the name of the current day from argument
   * @param {Date | string} dt
   * @returns {string} cDayName
   */
  GetDayNameFromParam(dt) {
    if (!dt) return null;
    var date = new Date(dt);
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const cDayName = days[date.getDay()];
    return cDayName;
  }
  /**
   * @description returns the name of the current month
   * @returns {string} cMonthName
   */
  GetMonthName() {
    const date = new Date(Date.now());
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const cMonthName = months[date.getMonth()];
    return cMonthName;
  }
}
const instance = new DateTimeFunctions();
export { instance as dateTimeFunctions };

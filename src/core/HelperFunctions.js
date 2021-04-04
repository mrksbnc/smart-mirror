'use strict';

class HelperFunctions {
  /**
   * @description depending on noUnreed property creates an empty response element or
   * returns the original payload property as result
   * @param {object} payload
   * @param {Array<any>} payload.result
   * @param {boolean} payload.noUnreed
   * @returns {Array | undefined} the original payload or a new Array with one elements which
   * represents an empty response or on error undefined
   */
  CreateNormalizedPayloadForEmail(payload) {
    if (!payload || typeof payload !== 'object') return void 0;
    let normalizedArray = payload?.result;
    if (payload?.noUnreed) {
      let newPayload = {
        from: null,
        subject: null,
        empty: true,
      };
      normalizedArray = [];
      normalizedArray.push(newPayload);
    }
    return normalizedArray;
  }
}

let instance = new HelperFunctions();
export { instance as helperFunctions };

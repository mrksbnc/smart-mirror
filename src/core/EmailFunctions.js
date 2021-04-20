'use strict';

import imaps from 'imap-simple';
import { email } from '../config/config';

class EmailFunctions {
  /**
   * @description Required properties for a successful IMAP login
   * @param {Object} config
   * @param {Object} config.imap
   * @param {string} config.imap.user
   * @param {string} config.imap.password
   * @param {string} config.imap.fetchOptions
   * @param {number} config.imap.port
   * @param {boolean} config.imap.searchResults
   * @param {number} config.imap.authTimeout
   */
  constructor(config) {
    this.config = config;
  }
  /**
   * @description returns sender and subject to every unseen mail in the
   * given inbox
   * @returns {Array<PayloadModel>} unseenMails
   */
  async GetUnseenMails() {
    const searchCriteria = ['UNSEEN'];
    const fetchOptions = {
      bodies: ['HEADER', 'TEXT'],
      markSeen: false,
    };
    const connection = await imaps.connect(this.config);
    await connection.openBox('INBOX');
    const searchResults = await connection.search(searchCriteria, fetchOptions);
    const unseenMails = searchResults.map(element => {
      let filtered = element.parts.filter(f => f.which == 'HEADER')[0].body;
      return {
        from: filtered.from[0],
        subject: filtered.subject[0],
      };
    });
    return unseenMails;
  }
}

let instance = new EmailFunctions(email);
export { instance as emailFunctions };

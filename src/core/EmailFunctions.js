'use strict';

import imaps from 'imap-simple';
import { email } from '../config/config';

class EmailFunctions {
  constructor(config) {
    this.config = config;
  }
  /**
   * @description returns sender and subject to every unseen mail in the
   * given inbox
   * @returns {Array<any>} unseenMails
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

import {utilService} from '../../../services/util.service.js';
import {storageService} from '../../../services/storage.service.js';
import {dummyDataService} from './mail.dummydata.service.js';

export const mailService = {
  query,
};

const STORAGE_KEY = 'emailDB';
let gEmails = _getEmails();

function query(criteria = null) {
  let emails = storageService.loadFromStorage(STORAGE_KEY);
  if (!criteria) {
    const inboxEmails = emails.filter(email => email.status === 'inbox');
    return Promise.resolve(inboxEmails);
  }
}

function _getEmails() {
  let emails = storageService.loadFromStorage(STORAGE_KEY);
  if (!emails || !emails.length) {
    emails = dummyDataService.getDummyEmails();
  }
  _saveEmailsToStorage(emails);
  return emails;
}

function _saveEmailsToStorage(emails) {
  storageService.saveToStorage(STORAGE_KEY, emails);
}

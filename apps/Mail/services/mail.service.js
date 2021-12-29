import {utilService} from '../../../services/util.service.js';
import {storageService} from '../../../services/storage.service.js';
import {dummyDataService} from './mail.dummydata.service.js';

export const mailService = {
  query,
  toggleStar,
  deleteMailById,
  toggleRead,
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

function toggleRead(id) {
  const mailIdx = gEmails.findIndex(mail => mail.id === id);
  gEmails[mailIdx].isRead = !gEmails[mailIdx].isRead;
  _saveEmailsToStorage(gEmails);
  return Promise.resolve();
}

function deleteMailById(id) {
  const mailIdx = gEmails.findIndex(email => email.id === id);
  // delete from trash
  if (gEmails[mailIdx].status === 'trash') gEmails.splice(mailIdx, 1);
  else {
    // check if email is starred first
    if (gEmails[mailIdx].isStarred) gEmails[mailIdx].isStarred = false;
    // move email to trash
    gEmails[mailIdx].status = 'trash';
  }
  _saveEmailsToStorage(gEmails);
  return Promise.resolve();
}

function toggleStar(id) {
  const mailIdx = gEmails.findIndex(mail => mail.id === id);
  gEmails[mailIdx].isStarred = !gEmails[mailIdx].isStarred;
  _saveEmailsToStorage(gEmails);
  return Promise.resolve();
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

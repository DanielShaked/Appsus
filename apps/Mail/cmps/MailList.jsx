import {MailPreview} from './MailPreview.jsx';

// TODO: need to pass loadmails ? to load all emails?
export function MailList({mails, loadMails}) {
  if (!mails || !mails.length) return <h1>There are no emails to show</h1>;
  return (
    <div className="mail-list-container main-layout">
      <div className="mail-list-header">
        <h3 className="mail-list-from">From</h3>
        <h3 className="mail-list-subject">Subject</h3>
        <h3 className="mail-list-message">Message</h3>
        <h3 className="mail-list-time">Time</h3>
      </div>
      <div className="mail-list">
        {mails.map(mail => (
          <MailPreview key={mail.id} mail={mail} loadMails={loadMails} />
        ))}
      </div>
    </div>
  );
}

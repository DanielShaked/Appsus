import {MailPreview} from './MailPreview.jsx';

// TODO: need to pass loadmails ? to load all emails?
export function MailList({mails, loadMails}) {
  if (!mails || !mails.length) return <h1>There are no emails to show</h1>;
  return (
    <div className="mail-list-container">
      <div className="mail-list">
        {mails.map(mail => (
          <MailPreview key={mail.id} mail={mail} loadMails={loadMails} />
        ))}
      </div>
    </div>
  );
}

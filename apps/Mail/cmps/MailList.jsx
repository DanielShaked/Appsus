import {MailFilter} from './MailFilter.jsx';
import {MailPreview} from './MailPreview.jsx';

// TODO: need to pass loadmails ? to load all emails?
export function MailList({mails, loadMails, onSetCriteria, criteria}) {
  // console.log(this.props);
  if (!mails) return <h1 className="main-layout">There are no emails to show</h1>;
  return (
    <div className="mail-list-container main-layout">
      <MailFilter criteria={criteria} onSetCriteria={onSetCriteria} />
      <div className="mail-list-rows-container">
        <div className="mail-list-header">
          <h3 className="mail-list-from">Messages</h3>
          {/* <h3 className="mail-list-subject">Subject</h3>
        <h3 className="mail-list-message">Message</h3>
        <h3 className="mail-list-time">Time</h3> */}
        </div>
        {mails.length === 0 && <h1>There are no emails to show</h1>}
        {/* <div className="mail-list"> */}
        {mails && mails.map(mail => <MailPreview key={mail.id} mail={mail} loadMails={loadMails} />)}
        {/* </div> */}
      </div>
    </div>
  );
}

import {MailLongText} from './MailLongText.jsx';
import {mailService} from '../services/mail.service.js';
import {utilService} from '../../../services/util.service.js';
export class MailPreview extends React.Component {
  state = {
    mail: this.props.mail,
    isRead: this.props.mail.isRead,
    isStarred: this.props.mail.isStarred,
  };

  onToggleStar = () => {
    mailService.toggleStar(this.props.mail.id).then(() => {
      console.log('Toggle star...');
      // TODO: to check if need to reload all emails
      //   this.props.loadMails();
    });
    this.setState({isStarred: !this.state.isStarred});
  };

  onToggleRead = () => {
    mailService.toggleRead(this.props.mail.id).then(() => {
      console.log('Toggle read...');
    });
    this.setState({isRead: !this.state.isRead});
  };

  onDeleteMail = () => {
    mailService.deleteMailById(this.props.mail.id).then(() => {
      this.props.loadMails();
    });
  };

  render() {
    const {mail} = this.props;
    const {isRead, isStarred} = this.state;
    return (
      <section className={`mail-preview ${isRead ? 'read' : 'unread'}`} onClick={this.onToggleRead}>
        <h3>{mail.from}</h3>
        <p className="mail-preview-subject">{mail.subject}</p>
        <MailLongText txt={mail.body} />
        <div className="mail-preview-actions">
          <div className="actions-btns">
            <i
              onClick={this.onToggleStar}
              className={`${isStarred ? 'active-star' : ''} mail-preview-star fas fa-star`}></i>

            <i onClick={this.onDeleteMail} className="mail-preview-delete fas fa-trash"></i>
          </div>
          <div className="actions-time">
            <p>{utilService.getFormattedDate(mail.sentAt)}</p>
          </div>
        </div>
      </section>
    );
  }
}

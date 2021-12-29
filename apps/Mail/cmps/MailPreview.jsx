import {MailLongText} from './MailLongText.jsx';
import {mailService} from '../services/mail.service.js';
export class MailPreview extends React.Component {
  state = {
    mail: this.props.mail,
    isRead: this.props.mail.isRead,
    isStarred: this.props.mail.isStarred,
  };

  onToggleStar = ev => {
    ev.preventDefault();
    mailService.ToggleStar(this.props.mail.id).then(() => {
      console.log('Toggle success in localStorage object');
      this.props.loadMails();
    });
    this.setState({isStarred: !this.state.isStarred});
  };

  render() {
    const {mail} = this.props;
    const {isRead, isStarred} = this.state;
    return (
      <section className="mail-preview">
        <h3>{mail.from}</h3>
        <p className="mail-preview-subject">{mail.subject}</p>
        <MailLongText txt={mail.body} />
        <div className="mail-preview-actions">
          <div className="">
            <i
              onClick={this.onToggleStar}
              className={`${isStarred ? 'active-star' : ''} mail-preview-star fas fa-star`}></i>

            <i onClick={this.onDeleteMail} className="mail-preview-delete fas fa-trash"></i>
          </div>
        </div>
      </section>
    );
  }
}

import {mailService} from '../apps/Mail/services/mail.service.js';

export class MailApp extends React.Component {
  state = {
    mails: null,
    criteria: {
      status: 'inbox',
      txt: '',
      isStarred: false,
      isRead: false,
    },
  };

  componentDidMount() {
    this.loadMails();
  }

  loadMails = () => {
    const {criteria} = this.state;
    mailService.query().then(mails => {
      this.setState({mails});
    });
  };

  render() {
    const {mails} = this.state;
    console.log('mails', mails);
    return (
      <section className="keep-app">
        <h1>Mail app!</h1>
      </section>
    );
  }
}

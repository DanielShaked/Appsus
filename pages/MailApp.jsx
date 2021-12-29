import {MailList} from '../apps/mail/cmps/MailList.jsx';
import {mailService} from '../apps/Mail/services/mail.service.js';
import {Loader} from '../cmps/Loader.jsx';

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
    // TODO: send criteria for filtering
    mailService.query().then(mails => {
      this.setState({mails});
    });
  };

  render() {
    const {mails} = this.state;
    if (!mails) return <Loader />;
    return (
      <section className="mail-app">
        <MailList mails={mails} loadMails={this.loadMails} />
      </section>
    );
  }
}

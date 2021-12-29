import {mailService} from '../apps/Mail/services/mail.service.js';
import {MailFilter} from '../apps/mail/cmps/MailFilter.jsx';
import {MailList} from '../apps/mail/cmps/MailList.jsx';
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
        {/* TODO: send onSetFilter */}
        <MailFilter criteria={this.state.criteria} />
        <MailList mails={mails} loadMails={this.loadMails} />
      </section>
    );
  }
}

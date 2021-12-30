import {mailService} from '../apps/Mail/services/mail.service.js';
import {Loader} from '../cmps/Loader.jsx';

import {MailFilter} from '../apps/mail/cmps/MailFilter.jsx';
import {MailList} from '../apps/mail/cmps/MailList.jsx';
import {MailCompose} from '../apps/mail/cmps/MailCompose.jsx';
import {MailModal} from '../apps/mail/cmps/MailModal.jsx';
import {MailSideNav} from '../apps/mail/cmps/MailSideNav.jsx';

export class MailApp extends React.Component {
  state = {
    mails: null,
    criteria: {
      status: 'inbox',
      txt: '',
      isStarred: false,
      isRead: false,
    },
    isCompose: false,
    isModal: false,
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

  toggleModal = () => {
    this.setState({isModal: !this.state.isModal});
  };

  onClose = () => {
    this.setState({isCompose: false});
  };

  onOpenCompose = () => {
    this.setState({isCompose: true});
  };

  render() {
    const {mails} = this.state;
    if (!mails) return <Loader />;
    return (
      <section className="mail-app">
        <div className="mail-main main-layout">
          {/* TODO: send onSetFilter */}
          <aside className="nav-left">
            <button onClick={this.onOpenCompose}>Compose New Email</button>
            <MailSideNav />
          </aside>
          <MailFilter criteria={this.state.criteria} />
          <MailList mails={mails} loadMails={this.loadMails} toggleModal={this.toggleModal} />
          {this.state.isCompose && <MailCompose onClose={this.onClose} toggleModal={this.toggleModal} />}
          {this.state.isModal && <MailModal txt="Message sent successfully" toggleModal={this.toggleModal} />}
        </div>
      </section>
    );
  }
}

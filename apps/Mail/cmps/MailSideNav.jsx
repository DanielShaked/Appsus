export class MailSideNav extends React.Component {
  state = {
    criteria: {
      status: 'inbox',
      txt: '',
      isStarred: false,
      isRead: false,
    },
  };

  render() {
    const {status} = this.state.criteria;
    return (
      <section className="mail-sidenav">
        <ul className="clean-list flex">
          <li className={`${status === 'inbox' ? 'active-side' : ''} side-nav side-nav-inbox`}>
            <i className="side-nav-icon fas fa-inbox"></i>
            Inbox
          </li>
          <li className={`${status === 'starred' ? 'active-side' : ''} side-nav`}>
            <i className="side-nav-icon fas fa-star"></i>
            Starred
          </li>
          <li className={`${status === 'sent' ? 'active-side' : ''} side-nav`}>
            <i className="side-nav-icon fas fa-paper-plane"></i>
            Sent
          </li>
          <li className={`${status === 'draft' ? 'active-side' : ''} side-nav`}>
            <i className="side-nav-icon fas fa-file"></i>
            Drafts
          </li>
          <li className={`${status === 'trash' ? 'active-side' : ''} side-nav`}>
            <i className="side-nav-icon fas fa-trash"></i>
            Trash
          </li>
        </ul>
      </section>
    );
  }
}

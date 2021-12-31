export class MailSideNav extends React.Component {
  state = {
    criteria: {
      status: 'inbox',
      txt: '',
      isStarred: false,
      isRead: false,
    },
  };

  setCriteriaStatus = status => {
    this.setState({criteria: {...this.state.criteria, status}}, () => {
      this.props.onSetCriteria(this.state.criteria);
    });
  };

  render() {
    const {status} = this.state.criteria;
    return (
      <section className="mail-sidenav">
        <div onClick={this.props.onOpenCompose} className="mail-sidenav-compose">
          {/* <button onClick={this.props.onOpenCompose}>
            <i className="fas fa-plus"></i>
            Compose
          </button> */}
          <i className="fas fa-plus"> </i>
        </div>
        <ul className="clean-list flex">
          <li
            onClick={() => {
              this.setCriteriaStatus('inbox');
            }}
            className={`${status === 'inbox' ? 'active-side' : ''} side-nav`}>
            <i className="side-nav-icon fas fa-inbox"></i> Inbox
          </li>
          <li
            onClick={() => {
              this.setCriteriaStatus('starred');
            }}
            className={`${status === 'starred' ? 'active-side' : ''} side-nav`}>
            <i className="side-nav-icon fas fa-star"></i>
            Starred
          </li>
          <li
            onClick={() => {
              this.setCriteriaStatus('sent');
            }}
            className={`${status === 'sent' ? 'active-side' : ''} side-nav`}>
            <i className="side-nav-icon fas fa-paper-plane"></i>
            Sent
          </li>
          <li
            onClick={() => {
              this.setCriteriaStatus('draft');
            }}
            className={`${status === 'draft' ? 'active-side' : ''} side-nav`}>
            <i className="side-nav-icon fas fa-file"></i>
            Drafts
          </li>
          <li
            onClick={() => {
              this.setCriteriaStatus('trash');
            }}
            className={`${status === 'trash' ? 'active-side' : ''} side-nav`}>
            <i className="side-nav-icon fas fa-trash"></i>
            Trash
          </li>
        </ul>
      </section>
    );
  }
}

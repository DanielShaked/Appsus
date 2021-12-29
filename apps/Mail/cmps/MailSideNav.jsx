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
    return <aside className="mail-sidenav"></aside>;
  }
}

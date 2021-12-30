// imports Pages //
import {Home} from './pages/Home.jsx';
import {MailApp} from './pages/MailApp.jsx';
import {BookApp} from './pages/BookApp.jsx';
import {NoteApp} from './pages/NoteApp.jsx';
import {MailDetails} from './apps/mail/pages/MailDetails.jsx';

// imports cmps //
import {Header} from './cmps/Header.jsx';

// import services//

//routing
const Router = ReactRouterDOM.HashRouter;
const {Route, Switch} = ReactRouterDOM;

export function App() {
  return (
    <Router>
      <section className="app">
        <Header />
        <main>
          <Switch>
            <Route component={MailDetails} path="/mail/:mailId" />
            <Route component={NoteApp} path="/note" />
            <Route component={MailApp} path="/mail" />
            <Route component={BookApp} path="/book" />
            <Route component={Home} path="/" />
          </Switch>
        </main>
      </section>
    </Router>
  );
}

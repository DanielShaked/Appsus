// imports Pages //
import { Home } from "./pages/Home.jsx"
import { KeepApp } from "./pages/KeepApp.jsx"
import { MailApp } from "./pages/MailApp.jsx"
import { BookApp } from "./pages/BookApp.jsx"

// imports cmps //
import { Header } from "./cmps/Header.jsx"


// import services//



//routing
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM



export function App() {

  return (
    <Router>
      <section className="app">
        <Header />
        <main>
          <Switch>
            <Route component={KeepApp} path ="/keep"/>
            <Route component={MailApp} path ="/mail"/>
            <Route component={BookApp} path ="/book"/>
            <Route component={Home} path ="/"/>
          </Switch>
        </main>
      </section> 
    </Router>
  )
}


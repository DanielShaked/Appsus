const {NavLink,Link} = ReactRouterDOM

export function Header() {
    return (
        <header className="header">
            <div className="header-container main-layout">
                <Link className="clean-link" to="/">
                    <h1>Welcome to Appsus!</h1>
                </Link>
            <nav className="main-nav">
                <ul className="clean-list flex">
                    <li> <NavLink exact to="/book">book</NavLink></li>
                    <li><NavLink to="/mail">mail</NavLink></li>
                    <li><NavLink to="/note">keep</NavLink></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
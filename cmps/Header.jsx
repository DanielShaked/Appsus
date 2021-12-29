const {NavLink,Link} = ReactRouterDOM

export function AppHeader() {
    return (
        <header className="app-header">
            
            <Link className="clean-link" to="/">
        <h1>Book Shop <i  className="fas fa-book-reader"></i></h1>
            </Link>
         <nav className="main-nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/book">Our books</NavLink>
        </nav>
    </header>
    )
}
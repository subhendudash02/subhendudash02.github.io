import "../styles/navbar.css";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <a href="/" className="nav-logo">Subhendu Dash</a>
                <ul className="nav-menu">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Work</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    );
}
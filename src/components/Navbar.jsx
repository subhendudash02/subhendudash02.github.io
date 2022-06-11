// navbar
import "../styles/navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <a href="/" className="nav-logo">Subhendu Dash</a>
                <ul className="nav-menu">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/">Work</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/">Contact</Link></li>
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
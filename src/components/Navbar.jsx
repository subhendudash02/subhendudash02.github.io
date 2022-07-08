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
                    <li className="nav-item"><Link className="nav-link" to="/work">Work</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}
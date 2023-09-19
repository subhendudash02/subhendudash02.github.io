// navbar
import navbarStyle from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={navbarStyle.navbar}>
            <a href="/" className={navbarStyle.navLogo}>Subhendu Dash</a>
            <ul className={navbarStyle.navMenu}>
                <li className={navbarStyle.navItem}><Link className={navbarStyle.navLink} href="/">Home</Link></li>
                <li className={navbarStyle.navItem}><Link className={navbarStyle.navLink} href="/about">About</Link></li>
                <li className={navbarStyle.navItem}><Link className={navbarStyle.navLink} href="/work">Work</Link></li>
                <li className={navbarStyle.navItem}><a href="https://www.subhendu.tech/resume/Subhendu_Dash.pdf" className={navbarStyle.navLink} target="_blank" rel="noreferrer">Resume</a></li>
                <li className={navbarStyle.navItem}><Link className={navbarStyle.navLink} href="">Blogs</Link></li>
            </ul>
        </nav>
    );
}

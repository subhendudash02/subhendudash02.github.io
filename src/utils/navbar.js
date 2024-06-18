// navbar
import navbarStyle from "../styles/Navbar.module.css";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

export default function Navbar() {
    const [toggle, setToggle] = useState(`${navbarStyle.hide}`);
    const toggleMenu = () => {
        if (toggle == `${navbarStyle.hide}`) setToggle(`${navbarStyle.show}`);
        else setToggle(`${navbarStyle.hide}`);
    }

    return (
        <>
        <MenuIcon onClick={toggleMenu} id={navbarStyle.hamburger} />
        <nav className={navbarStyle.navbar} id={toggle}>
            <ul className={navbarStyle.navMenu}>
                <li className={navbarStyle.navItem}><Link className={navbarStyle.navLink} href="/">Home</Link></li>
                <li className={navbarStyle.navItem}><Link className={navbarStyle.navLink} href="/about">About</Link></li>
                <li className={navbarStyle.navItem}><Link className={navbarStyle.navLink} href="/work">Work</Link></li>
                <li className={navbarStyle.navItem}><a href="https://subhendudash02.github.io/resume/Subhendu_Dash.pdf" className={navbarStyle.navLink} target="_blank" rel="noreferrer">Resume</a></li>
                <li className={navbarStyle.navItem}><Link className={navbarStyle.navLink} href="">Blogs</Link></li>
            </ul>
        </nav>
        </>
    );
}

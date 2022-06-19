import '../styles/contact.css';
import social from '../utils/social';
import Tooltip from '@mui/material/Tooltip';
import copy from "../utils/copyText";

export default function Contact() {
    return (
        <div className="contact">
            <h1>Say Hi to me! 👋</h1>
            <p>Keep in touch via </p>
            <div className="links">
                <p>Discord -
                    <Tooltip title="copy to clipboard" arrow>
                        <strong id="copy" onClick={() => copy("#copy")}> { social.discord }</strong>
                    </Tooltip> 
                </p>
                <p>Twitter - <a href={social.twitter}>Click me!</a></p>
                or

                <h2>Mail Me!</h2>
            </div>
        </div>
    );
};
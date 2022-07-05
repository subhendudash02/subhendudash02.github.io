import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../styles/contact.css';
import social from '../utils/social';
import Tooltip from '@mui/material/Tooltip';
import copy from "../utils/copyText";

export default function Contact() {
    const sendMsg = useRef();

    const send = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, sendMsg.current, process.env.REACT_APP_PUBLIC_KEY)
            .then(() => {console.log("Sent")})
            .catch((err) => {console.log(err)});
    }

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
                or
                <h2>Send a mail here!</h2>

                <form ref={sendMsg} onSubmit={send}>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea name="message" />
                    <input type="submit" value="Send!" />
                </form>
            </div>
        </div>
    );
};
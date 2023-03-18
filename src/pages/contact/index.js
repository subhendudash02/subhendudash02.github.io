import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '@/utils/navbar';

import contactStyle from '@/styles/Contact.module.css';
import social from '@/utils/social';
import Tooltip from '@mui/material/Tooltip';
import copy from "@/utils/copyText";

export default function Contact() {
    const sendMsg = useRef();

    const send = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, sendMsg.current, process.env.REACT_APP_PUBLIC_KEY)
            .then(() => {alert("Message sent successfully!")})
            .catch((err) => {alert("Message not sent! Try again")});
    }

    return (
        <>
        <Navbar />
        <div className={contactStyle.contact}>
            <h1>Say Hi to me! 👋</h1>
            <p>Keep in touch via </p>
            <div className={contactStyle.links}>
                <p>Discord -
                    <Tooltip title="copy to clipboard" arrow>
                        <strong id={contactStyle.copy} onClick={() => copy("#copy")}> { social.discord }</strong>
                    </Tooltip> 
                </p>
                or
                <h2>Send a mail here!</h2>

                <form ref={sendMsg} onSubmit={send}>
                    <input type="text" name="name" placeholder="Name" required={true} /><br />
                    <input type="email" name="email" placeholder="Email" required={true} /><br />
                    <textarea rows="5" name="message" required={true} placeholder='Message' /><br />
                    <input type="submit" value="Send!" />
                </form>
            </div>
        </div>
        </>
    );
};
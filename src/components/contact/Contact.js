import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8r4jyod', 'template_d80izwa', form.current, 'i1YUyMBldIsd9MD4W')
            .then(() => {
                e.target.reset();
            }, (error) => {
                alert(error.message)
            });
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h1>Contact Me</h1>

            <div className='container contact__container'>
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>borislavbenderov@gmail.com</h5>
                        <a href="mailto:benderow94@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>borislavbenderov</h5>
                        <a href="https://m.me/borislav.benderov" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}
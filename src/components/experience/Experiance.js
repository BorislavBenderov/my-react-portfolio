import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

export const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h1>My Experience</h1>
            <div className='container experience__container'>
                <div className="experience__frontend">
                    <h3>I can build single page and multi page applications with React JS, AJAX, REST Services, CRUD Operations,
                        React Router, Context API, Authentication, Firebase, HTML, CSS, Node JS, Express, Handlebars, MongoDB, Mongoose,
                        Cookies, Sessions, JSON Web Token.
                    </h3>
                </div>
            </div>
        </section>
    );
}
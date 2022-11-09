import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';

export const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Year </small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>JS Level</h5>
                            <small>Junior</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>
                    </div>

                    <p>
                        I'm a passionate JavaScript developer who loves to design and implement beautiful and responsive web applications. I live in Rudozem, Smolyan, Bulgaria. 
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}
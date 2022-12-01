import './about.css';
import ME from '../../assets/me.jpg';

export const About = () => {
    return (
        <section id='about'>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <h1>Hello, I'm</h1>
                        <h1>Borislav Benderov</h1>
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
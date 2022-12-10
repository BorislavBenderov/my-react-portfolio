import './portfolio.css';
import BLOG from '../../assets/blog.png';
import CHAT from '../../assets/chat.png';
import FITNESS from '../../assets/fitness-min.png';
import LAPTOP from '../../assets/laptop.png';
import MOVIE from '../../assets/movie.png';
import SOCIALMEDIA from '../../assets/social-media.png';
import TODOS from '../../assets/todos-min.png';

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h1>Portfolio</h1>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SOCIALMEDIA} alt="" />
          </div>
          <h3>Social Media Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/social-media-react-app" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={CHAT} alt="" />
          </div>
          <h3>Chat Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/messenger-chat-app" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={FITNESS} alt="" />
          </div>
          <h3>Fitness Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/fitness-app" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={LAPTOP} alt="" />
          </div>
          <h3>E-commerce Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/ecommerce-laptop-app" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MOVIE} alt="" />
          </div>
          <h3>Movie Catalog Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/movie-catalogue-app" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BLOG} alt="" />
          </div>
          <h3>Blog Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/blog-app" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TODOS} alt="" />
          </div>
          <h3>ToDo List Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/todo-list-app" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
}
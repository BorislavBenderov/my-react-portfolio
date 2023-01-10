import './portfolio.css';
import BLOG from '../../assets/blog.png';
import CHAT from '../../assets/chat.png';
import FITNESS from '../../assets/fitness-min.png';
import LAPTOP from '../../assets/laptop.png';
import MOVIE from '../../assets/movie.png';
import SOCIALMEDIA from '../../assets/social-media.png';
import TODOS from '../../assets/todos-min.png';
import BOOKS from '../../assets/dashboard-min.png';
import BLOGTS from '../../assets/blog-ts.png';

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
            <a href="https://github.com/BorislavBenderov/social-media-react-app" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://borislavbenderov.github.io/social-media-react-app" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={CHAT} alt="" />
          </div>
          <h3>Chat Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/messenger-chat-app" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://borislavbenderov.github.io/messenger-chat-app" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BLOGTS} alt="" />
          </div>
          <h3>Blog Application with Typescript</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/blog-ts-app" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://borislavbenderov.github.io/blog-ts-app" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={FITNESS} alt="" />
          </div>
          <h3>Fitness Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/fitness-app" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://borislavbenderov.github.io/fitness-app" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={LAPTOP} alt="" />
          </div>
          <h3>E-commerce Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/ecommerce-laptop-app" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://borislavbenderov.github.io/ecommerce-laptop-app" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MOVIE} alt="" />
          </div>
          <h3>Movie Catalog Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/movie-catalogue-app" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://borislavbenderov.github.io/movie-catalogue-app" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BLOG} alt="" />
          </div>
          <h3>Blog Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/blog-app" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://borislavbenderov.github.io/blog-app" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BOOKS} alt="" />
          </div>
          <h3>MERN Book Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/mern-book-app" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://mern-book-app-uq21.onrender.com" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TODOS} alt="" />
          </div>
          <h3>ToDo List Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BorislavBenderov/todo-list-app" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://borislavbenderov.github.io/todo-list-app" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
}
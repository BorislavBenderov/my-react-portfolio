import './footer.css';

export const Footer = () => {
    return (
        <footer>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#experience">Experience</a></li>             
            </ul>

            <div className="footer__copyright">
                <small>&copy; 2022. All rights reserved</small>
            </div>
        </footer>
    );
}
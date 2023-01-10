import './footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer__copyright">
                <small>&copy; {new Date().getFullYear()}. All rights reserved</small>
            </div>
        </footer>
    );
}
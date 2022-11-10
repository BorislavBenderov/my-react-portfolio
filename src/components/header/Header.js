import './header.css';

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Borislav Benderov</h1>
        <h5 className="text-light">JavaScript Developer</h5>
      </div>
    </header>
  );
}
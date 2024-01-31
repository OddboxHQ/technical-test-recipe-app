import logo from '../images/logo.svg';
import './Header.css';

function Header() {
    return (
    <header className="App-header">
        <img src={logo} alt="Oddbox Logo" className="App-logo"></img>
        Recipe Finder
    </header>
    );
  }

export default Header

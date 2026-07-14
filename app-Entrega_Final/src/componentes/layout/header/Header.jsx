import './Header.css';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <h1>Mi PetShop</h1>
            </Link>
            <Navbar />
        </header>
    );

}
export default Header;
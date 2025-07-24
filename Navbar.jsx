import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

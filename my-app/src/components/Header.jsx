import { useSelector } from 'react-redux';
import '../style/Header.css'
import { Link } from 'react-router-dom';

function Header() {
  const cartItems = useSelector((state) => state.Cart.items)
  return (
    <header>
      <div className='logo'>EaziBuy</div>

      <div className='menu'>
        <Link to={'/home'}>Home</Link>
        <Link to={'/product'}>Product</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/cart'} className='cart-link'>Cart<span className='cart-count'>{cartItems.length}</span></Link>
        <Link to={'/login'}>Login</Link>
      </div>
    </header>
  );
};

export default Header;

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const cartCount = useSelector((state) => state.cart?.items?.length ?? 0);
  return (
    <header>
      <h1>☕ 오즈 카페</h1>
      <nav>
        <Link to="/">메인</Link>
        <Link to="/cart">장바구니 ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;

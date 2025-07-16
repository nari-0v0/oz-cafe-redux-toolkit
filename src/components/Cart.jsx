import { useSelector, useDispatch } from 'react-redux';
import data from '../assets/data';
import { clearCart, removeFromCart } from '../redux/cartSlice';

function Cart() {
  const menu = useSelector((state) => state.menu.list);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (!menu)
    return (
      <div style={{ textAlign: 'center', margin: '80px' }}>
        {' '}
        메뉴 정보가 없어요!
      </div>
    );
  const allMenus = Object.values(menu).flat();
  return (
    <>
      <h2>장바구니</h2>
      {cart.length > 0 ? (
        <ul className="cart">
          {cart.map((el, idx) => {
            const item = allMenus.find((m) => m.id === el.id);
            return (
              <CartItem
                key={`${el.id}-${idx}`}
                item={item}
                options={el.options}
                quantity={el.quantity}
                onRemove={() => dispatch(removeFromCart(el.id))}
              />
            );
          })}
        </ul>
      ) : (
        <div className="no-item">장바구니에 담긴 상품이 없어요!</div>
      )}

      {cart.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>전체 비우기</button>
      )}
    </>
  );
}

function CartItem({ item, options = {}, quantity, onRemove }) {
  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <img height={100} src={item.img} />
        <div>{item.name}</div>
      </div>
      <div className="cart-item-option">
        {Object.keys(options).map((optKey) => (
          <div key={optKey}>
            {optKey} : {data.options[optKey][options[optKey]]}
          </div>
        ))}
        <div>개수 : {quantity}</div>
      </div>
      <button className="cart-item-delete" onClick={onRemove}>
        삭제
      </button>
    </li>
  );
}
export default Cart;

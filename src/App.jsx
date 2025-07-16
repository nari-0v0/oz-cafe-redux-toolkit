import './App.scss';
import data from './assets/data';
import Header from './components/Header';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setMenu } from './redux/menuSlice';

function App() {
  // const menu = useSelector((state) => state.menu.list);
  // const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenu(data.menu));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

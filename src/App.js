import './App.css';
import Header from './components/Header';
import Products from "./components/Products";
import CartProvider from './contexts/CartProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <Header />
      <Products />
    </CartProvider>
  );
}

export default App;

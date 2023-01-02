import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import ProductDetails from './component/ProductDetails';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import CartView from './component/CartView';
import Cart from './component/Cart';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import ScrollTop from './component/ScrollTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Provider store={store}>
      <ScrollTop />
      <div >
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/productdetails/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/cart' element={<CartView></CartView>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </div>
      <ToastContainer />
    </Provider>

  );
}

export default App;

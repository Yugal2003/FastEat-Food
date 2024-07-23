import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Subcategory from "./component/Subcategory"
import App from './App';
import Product from './component/Products'
import { Provider } from 'react-redux';
import store from './redux/Store';
import toast,{ Toaster } from 'react-hot-toast';
import CartDetails from './component/CartDetails';
import { auth } from './FireBase/Firebase';
import { onAuthStateChanged } from "firebase/auth";
import Signup from './FireBase/SignUp';
import Login from './FireBase/SignIn';


const RootComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subcategory/:subcategory" element={<Subcategory />} />
          <Route path="/product/:productid" element={<Product />} />
          <Route path="/cart" element={user ? <CartDetails /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'; 
import SingIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import InnerText from './components/Header/InnerText.jsx';
import Home from './pages/Home.jsx';
import BookAppoitment from './pages/BookAppoitment.jsx';
import Wallet from './components/Wallet.jsx';

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  children: [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <SingIn/>
        
    },
    {
        path: "/signup",
        element:<SignUp/>
    },
    {
      path: "/book",
      element: <BookAppoitment/>
    },
    {
      path: "/wallet",
      element: <Wallet/>
    },
  ]
}

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

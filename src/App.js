
import "./App.css";
import Header from "./Components/Header.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { auth } from './Components/firebase'
import { useEffect } from "react";
import { useStateValue } from './Components/StateProvider'

function App() {

  const [, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('Username', authUser)

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [dispatch])

  return (
    <div className="app">
        
      <Routes>
        <Route path="/" element={<><Header/><Home/></>} />
        <Route path="/checkout" element={<><Header/><Checkout/></>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

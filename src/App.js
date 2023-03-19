import React from "react";
import {Routes, Route} from 'react-router-dom';
import Signin from './components/Signin';
import Signup from "./components/Signup";
import Account from './components/Account';
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <h1 className='text-center text-3xl font-bold'>
        React Auth & Context
      </h1>
      <AuthContextProvider>
      <Routes>
        <Route path="/" excat element={<Signin />} />
        <Route path="/signup"  element={<Signup />} />
        <Route path="/account"  element={
        <ProtectedRoute><Account /></ProtectedRoute>
        } />
      </Routes>
      </AuthContextProvider>
      
    </>
  );
}

export default App;

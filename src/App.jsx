import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import LoginScreen from './Components/Login/LoginScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import FillDetails from './Components/SignUp/FillDetails';
import LoginDetails from './Components/SignUp/LoginDetails';
import EducatorsProfile from './Components/EducatorsProfile/EducatorsProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/FillDetails' element={<FillDetails/>} />
        <Route path='/LoginDetails' element={<LoginDetails/>} />
        <Route path='/EducatorsProfile' element={<EducatorsProfile/>} />
      </Routes>
      
    </Router>
  );
};

export default App;

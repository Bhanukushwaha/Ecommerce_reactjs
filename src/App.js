import React from 'react'
import Home from './Features/Home';
import Aboute from './Features/Aboute';
import Product from './Features/Product';
import Contect from './Features/Contect';
import Shop from './Features/Shop';
import Studentindex from './Features/Studentindex'
import Login from './Component/Login';
import Signup from './Component/Signup';
import Editstudent from './assets/Editstudent'
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import StudentCreate from './Features/StudentCreate';
function App() {
  return (
    <BrowserRouter>
      <header>
      <NavBar/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Aboute />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Studentindex" element={<Studentindex />} />
        <Route path="/studentCreate" element={<StudentCreate />} />
        <Route path="/editstudent/:id" element={<Editstudent />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

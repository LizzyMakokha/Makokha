import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import SignIn from './components/SignIn';
import SignUp from './components/Signup';
import AddProduct from './components/Addproduct';
import GetProduct from './components/Getproduct';
import MpesaPayment from './components/Mpesapayment';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>

    <div className="App">
      <NavBar/>
      <Carousel/>
        <h1>Welcome</h1>
        
      <Routes>
        <Route path='/' element={<GetProduct/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/MpesaPayment' element={<MpesaPayment/>}/>
      </Routes>

      <Footer/>
    </div>
    </Router>
  );
}
export default App;

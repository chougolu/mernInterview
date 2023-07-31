import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Manage } from './components/Manage';
import { Edit } from './components/Edit';
import { Protect } from './components/Protect';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/manage' element={<Protect  Component={Manage}/>}></Route>
          <Route path='/manage' element={<Manage/>}></Route>
          <Route path='/edit/:editId' element={<Edit/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

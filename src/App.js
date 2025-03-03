import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Forget from './Components/Forget'
import Successful from './Components/Successful';


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='login' element={<Login></Login>}></Route>
    <Route path='register' element={<Register></Register>}></Route>
    <Route path='forget' element={<Forget></Forget>}></Route>
    <Route path='successfull' element={<Successful></Successful>} ></Route>
   </Routes>
   </>
  );
}

export default App;

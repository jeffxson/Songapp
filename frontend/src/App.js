import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './screens/Home/Home'
import Login from './screens/Login/Login';
import ProductScreen from './screens/Product/ProductScreen'
  

function App() {
  return (
    <div className="App">
     
     <Routes>
        <Route path='/' element={<Home />}  /> 
        <Route path='/login' element={<Login />}  /> 
        <Route path= '/product/:id' element= {<ProductScreen/>}  /> 
       </Routes>
    </div>
  );
}

export default App;

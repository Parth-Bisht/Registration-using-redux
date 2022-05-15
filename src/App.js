import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='dashboard' element={<Dashboard/>}></Route>
    </Routes>    
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Homepage } from './pages/Homepage';
import AddRoom from './pages/AddRoom';
import Header from './components/Header';
import { ContextProvider } from './context/Context';

import Room from './pages/Room';
import AddProduct from './components/AddProduct';
import ProductSquare from './components/ProductSquare';


function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/addRoom' element={<AddRoom />}/>
          <Route path='/room/:roomName' element={<Room />}/>
          <Route path='/addProduct' element={<AddProduct />}/>
        </Routes>
      </Router>
      </ContextProvider>
    </div>
  );
}

export default App;

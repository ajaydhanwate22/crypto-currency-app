import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Coin from './Pages/Coin/Coin';


function App() {
  return (
   <>
   <Router>
    <div className="app">
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/coin/:coinId'  element={<Coin/>}/>
    </Routes>
   </div>
   </Router>
   </>
  );
}


export default App;

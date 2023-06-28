import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Publications from './Components/Publications/Publications';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="">
      <Header className="mb-4"></Header>
      <br/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;

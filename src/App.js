import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className="">
      <Header className="mb-4"></Header>
      <br/>
      <Banner></Banner>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Publications from './Components/Publications/Publications';

function App() {
  return (
    <div className="">
      <Header className="mb-4"></Header>
      <br/>
      <Banner></Banner>
      <Publications></Publications>
    </div>
  );
}

export default App;

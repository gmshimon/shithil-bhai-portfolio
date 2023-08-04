import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Publications from './Components/Publications/Publications'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Publication from './Components/Publications/Publication'
import SinglePublication from './Components/Publications/SinglePublication/SinglePublication'
import SingleFeatured from './Components/FeaturedWorks/SingleFeaturedWork/SingleFeatured'

function App () {
  return (
    <div className=''>
      <Header className='mb-4'></Header>
      <br />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route
          path='/#publications'
          element={<Publications id='publications'></Publications>}
        ></Route> */}
        <Route
          path='/publications/:id'
          element={<SinglePublication></SinglePublication>}
        ></Route>
        <Route
          path='/feature-work/:id'
          element={<SingleFeatured></SingleFeatured>}
        ></Route>
      </Routes>
    </div>
  )
}

export default App

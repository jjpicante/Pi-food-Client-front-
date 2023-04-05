import style from './App.module.css';
import {Routes,Route} from "react-router-dom"
import Landing from './React/Landing/landing'
import Detail from './React/Detail/detail'
import Form from './React/Form/form'
import Home from './React/Home/home'

import Nav from './React/Nav/nav';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation()
  
  return (
    <div className={style.body}>
      {location.pathname !== "/" && <Nav/>}
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
   
  )
  }
export default App;
   


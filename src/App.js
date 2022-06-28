import './App.css';

// import Header from './structure/header/header'
// import Banner from './structure/banner/banner';
import Slider from './structure/slider/slider'
import Slider2 from './structure/slider/slider2'
import{ Divider, DividerDown} from './structure/divider/divider';
import Contact from './structure/contact/contact'


import Education from './pages/education/education'
import Project from './pages/projects/projects'
// import Contact from './pages/contact/contact'
import About from './pages/about/about'
import Home from './pages/home/home'



import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom"

const App = () => (
<Router>
  {/* <Banner/> */}
  {/* <Header
    titulo='David Pacheco'
    logo="https://cdn-icons-png.flaticon.com/512/518/518713.png"
  /> */}
  <Divider
    title='Habilidades'
  />
    <Slider/>
  <DividerDown/>
  <Divider
    title='Educacion'
  />
    <Slider2/>
  <DividerDown/>
  <Divider
    title='Sobre mi'
  />
  
  <DividerDown/>
  <Divider
    title='Contacto'
  />  
    <Contact/>
  <DividerDown/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="" element={<Project/>} />
    <Route path="" element={<Education/>} />
    <Route path="" element={<About/>} />
    <Route path="" element={<Contact/>} />
  </Routes>
</Router>
)

export default App
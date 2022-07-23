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
import CardModules from '../src/structure/card/card'
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
  <CardModules.Card>
    <p>
      Soy una persona paciente, con buenas habilidades blandas y técnicas
      adicionalmente me mantengo en contacto con las habilidades y herramientas en
      la vanguardia del desarrollo. Tengo experiencia con proyectos tanto propios como
      académicos en roles Frontend y Backend. Trabajo principalmente en plataformas
      Linux, sin embargo, me desenvuelvo con facilidad en entornos Windows o Mac.
    </p>
  </CardModules.Card>
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
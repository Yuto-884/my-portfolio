import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Works from './components/Works.tsx'
import WorkDetail from "./pages/WorkDetail";
import Certifications from './components/Certifications.tsx'

function HomePage(){
  return(
    <>
    <Hero/>
    <About/>
    <Skills/>
    <Works/>
    <Certifications/>
    </>
  )
}

export default function App(){

  const {theme,toggle} = useTheme()

  return(
    <>
      <ScrollToTop/>
        <Header theme={theme}onThemeToggle={toggle}/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/works/:id" element={<WorkDetail/>}/>
          </Routes>
        </main>  
        <Footer />
    </>
  )
}

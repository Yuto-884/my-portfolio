import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer.tsx'
function HomePage(){
  return(
    <>
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
          </Routes>
        </main>  
        <Footer />
    </>
  )
}

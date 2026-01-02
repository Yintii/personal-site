import './App.css'
import KHHeader from './components/KHHeader'
import Hero from './components/Hero'
import Spacer from './components/Spacer'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {

  return (
    <div className='container flex column'>
    <KHHeader/>
    <Spacer/>
    <Hero />
    <Spacer />
    <Portfolio />
    <Spacer />
    <Contact />
    </div>
  )
}

export default App

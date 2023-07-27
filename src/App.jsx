import './App.css'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

const tech = "React"

function App() {
  return (
    <>
      <div>
        <Header/>  
        <Home/>    
        <Contact/>
      </div>
    </>
  )
}

export default App

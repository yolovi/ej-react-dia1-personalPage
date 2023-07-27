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
        <h1>Yolanda Lopez</h1>
        <h3>Technologies I learned:</h3>
        <Home tech = "JavaScript"/> <br/>
        <Home tech = {tech}/><br/>
        <Home tech = "Mongoose"/> <br/>
        <Contact/>
      </div>
    </>
  )
}

export default App

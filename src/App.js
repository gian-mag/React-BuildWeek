import Profile from './components/profile-Components/Profile'
import Footer from './components/Footer.jsx'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><NavBar /> <Profile /> <Footer /></div>}/>
        {/* <Route path="/" element={}/>
        <Route path="/" element={}/> */}
      </Routes>
    </BrowserRouter>
  )
}


export default App;

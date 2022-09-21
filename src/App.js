import Profile from './components/profile-Components/Profile'
import Footer from './components/Footer.jsx'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExpSection from './components/expComponent/ExpSection'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<Profile />} />
        {/* <Route path="/" element={}/>
        <Route path="/" element={}/> */}
        <Route path="/experience" element={<ExpSection />} />
        <Route path="/home" element={<HomePage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App;

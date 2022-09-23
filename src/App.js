import Profile from './components/profile-Components/Profile'
import Footer from './components/Footer.jsx'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExpSection from './components/expComponent/ExpSection'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound';
import MessaggiFix from './components/fuffa/MessaggiFix';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<HomePage />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/experience" element={<ExpSection />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/" element={}/>
        <Route path="/" element={}/> */}
      </Routes>
      <MessaggiFix/>
      <Footer />
    </BrowserRouter>
  )
}


export default App;

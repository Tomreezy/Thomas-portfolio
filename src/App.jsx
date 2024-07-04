import Navbar from "./components/Navbar"
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Footer from "./components/Footer"


function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />}  />
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App

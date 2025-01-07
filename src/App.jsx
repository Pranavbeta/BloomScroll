import Discover from './Components/Discover';
import Home from './Components/Home'
import ObserverProvider from './ObserverProvider';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
function App() {

  return (
    <>
      <Router>
      <ObserverProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover/>} />
      </Routes>
        <div id="container3D"></div>
      </ObserverProvider>
      </Router>
    </>
  )
}
export default App

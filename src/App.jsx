import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify"; 
import Contact from "./components/Contact";
import Cardcover from "./components/Cardcover";


import Layout from './components/Layout'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/tools" element={<Layout><Cardcover /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;

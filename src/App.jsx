import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";  // Import ToastContainer
import Layout from './components/Layout/Layout';
import Cardcover from "./components/Cards/Cardcover";
import Contact from "./components/Contact";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Layout><Contact/></Layout>}/>
        <Route path="/tools" element={<Layout><Cardcover/></Layout>} />
      </Routes>
      
      <ToastContainer />
    </Router>
  );
}
export default App;

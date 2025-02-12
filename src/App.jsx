// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout/Layout';
import Cardcover from './components/Cards/Cardcover';
import Contact from './components/Contact';

import { ThemeProvider } from './components/context/ThemeContext'; 
import 'react-toastify/dist/ReactToastify.css';
import Page_FourZeroFour from './components/Page_FourZeroFour';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Layout><Contact /></Layout>} />
          <Route path="tools" element={<Layout><Cardcover /></Layout>} />
          <Route path="*" element={<Layout><Page_FourZeroFour/></Layout>} />
        </Routes>
        <ToastContainer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

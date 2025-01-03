import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import { ToastContainer } from "react-toastify"; // Only import once
import Contact from "./components/Contact";


function App() {

    return (

      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/contact" element={<Contact  />} />
                {/* <Route path="/Ai" element={<ImageGenerator  />} /> */}
              </Routes>
              <ToastContainer />
            </div>
          </div>
        </div>
      </Router>
    );
  }

export default App;

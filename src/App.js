import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";

// Pages
import HomePage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/Aboutpage";
import SinglePage from "./pages/Singlepage";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 1900);
  return (
    <>
      {loading == true ? (
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
            </Routes>
            <Routes>
              <Route exact path="/about" element={<AboutPage />} />
            </Routes>
            <Routes>
              <Route path="/singleshow/:id" element={<SinglePage />} />
            </Routes>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import SinglePage from "./pages/Singlepage";

const App = () => {
  return (
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
  );
};

export default App;

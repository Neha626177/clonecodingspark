import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <div className="  overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/blog" Component={BlogPage}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

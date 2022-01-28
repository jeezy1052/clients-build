import Nav from "./components/Navbar/Nav";
import Home from './pages/Home/Home'
import Review from './pages/Review/Review'
import Database from './pages/Database/Database'
import { BrowserRouter, Routes, Route, Link, Router} from 'react-router-dom'

function App() {
  return (
    <>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/review" element={<Review />} />
        <Route path="/" element={<Home />} />
        <Route path="/database" element={<Database />} />
      </Routes>
    </BrowserRouter>
    
    <div className="bg-green-200 w-full h-screen">
    </div>
    </>
  );
}

export default App;

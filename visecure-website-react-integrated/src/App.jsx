import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./pages/ViSecure-AboutUs";
import Admin from "./pages/ViSecure-Admin";
import CompanyPartner from "./pages/ViSecure-CmpnyPrtnr";
import Complete from "./pages/ViSecure-Complete";
import Form from "./pages/ViSecure-Form";
import Main from "./pages/ViSecure-Main";
import Visitor from "./pages/ViSecure-Visitor";
import Dashboard from "./pages/ViSecure-Dashboard";


function App() {
  return (
    <Router>
    <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/company-partner" element={<CompanyPartner />} />
        <Route path="/complete" element={<Complete />} />      
        <Route path="/form" element={<Form />} />
        <Route path="/main" element={<Main />} />
        <Route path="/visitor" element={<Visitor />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
</Router>
  );
}

export default App;


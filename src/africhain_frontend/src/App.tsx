import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Notfound from './pages/Notfound';
import BlogDetails from './pages/BlogDetails';
import ContactPage from './pages/Contact';
import Forgot from './pages/Forgot';
import LoginPage from './pages/Login';
import BlogPage from './pages/Blog';
import RegisterPage from './pages/Register';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<Notfound />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;

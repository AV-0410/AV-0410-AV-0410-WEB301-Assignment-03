import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import DetailsPage from './pages/DetailsPage'; // Import the details page
import RegistrationPage from './pages/RegistrationPage'; // Import the registration page
import LoginPage from './pages/LoginPage'; // Import the login page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/details/:type/:id" element={<DetailsPage />} /> {/* Dynamic route */}
        <Route path="/register" element={<RegistrationPage />} /> {/* Registration route */}
        <Route path="/login" element={<LoginPage />} /> {/* Login route */}
      </Routes>
    </Router>
  );
}

export default App;
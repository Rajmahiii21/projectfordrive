import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import AdminDashboard from './pages/AdminDashboard';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Contacts from './pages/Contacts';
import Newsletter from './pages/Newsletter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/projects" element={<Projects />} />
        <Route path="/admin/clients" element={<Clients />} />
        <Route path="/admin/contacts" element={<Contacts />} />
        <Route path="/admin/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
  );
}

export default App;

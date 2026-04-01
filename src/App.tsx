import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/:id" element={<ServiceDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

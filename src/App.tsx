import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import OrthodonticsEvalPage from './pages/OrthodonticsEvalPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/:id" element={<ServiceDetailPage />} />
        <Route path="/servicios/ortodoncia/evaluacion" element={<OrthodonticsEvalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

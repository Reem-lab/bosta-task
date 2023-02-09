import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import './styles/app.css';
import TrackingShipments from './components/Shipments/TrackingShipments';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracking-shipments" element={<TrackingShipments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

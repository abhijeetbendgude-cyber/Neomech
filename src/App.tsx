import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Footer from './components/Footer';  
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import StructuralFabrication from './pages/StructuralFabrication';
import EquipmentErection from './pages/EquipmentErection';
import PipelineFabrication from './pages/PipelineFabrication';


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/StructuralFabrication" element={<StructuralFabrication />} />
          <Route path="/EquipmentErection" element={<EquipmentErection />} />
          <Route path="/PipelineFabrication" element={<PipelineFabrication />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
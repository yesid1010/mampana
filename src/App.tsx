import { Routes, Route } from "react-router-dom";
import "./App.css";
import PageLayout from "./pages/Layout";
import Home from "./components/home";
import Beer from './pages/Beer'
import PageTragos from './pages/Tragos'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cervezas" element={<Beer />} />
          <Route path="/tragos" element={<PageTragos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

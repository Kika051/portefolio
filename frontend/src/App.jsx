import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import AddProjet from "./components/AddProjet";
import ProjetComponents from "./components/ProjetComponents";
import EditProjet from "./components/EditProjet";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/add" element={<AddProjet />} />
        <Route path="/edit/:id" element={<EditProjet />} />
        <Route path="/projets/:id" element={<ProjetComponents />} />
      </Routes>
    </div>
  );
}

export default App;

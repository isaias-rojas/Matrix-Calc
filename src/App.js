import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Determinants from "./Pages/Determinants";
import DeterminantsExamples from './Pages/DeterminantsExamples';
import Home from "./Pages/Home";
import Vectors from "./Pages/Vectors";
function App() {

  return (
    <>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/determinants" element={<Determinants/>} />
          <Route path="/vectors" element={<Vectors/>}/>
          <Route path="/ejemplos-determinantes" element={<DeterminantsExamples/>}/>

        </Routes>
      </div>
    </>
  )
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/home/Home.jsx"
import Error from "../Pages/error/Error.jsx"
import Trabalho from "../Pages/Trabalho/Trabalho.jsx"
import Saude from "../Pages/Saude/Saude.jsx";
import Educacao from "../Pages/Educacao/Educacao.jsx";
import Urbanizacao from "../Pages/Urbanizacao/Urbanizacao.jsx";
import Paz from "../Pages/Paz/Paz.jsx";

export default function Routers() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Trabalho" element={<Trabalho />} />
          <Route path="/Saude" element={<Saude />} />
          <Route path="/Educacao" element={<Educacao />} />
          <Route path="/Urbanizacao" element={<Urbanizacao />} />
          <Route path="/Paz" element={<Paz />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}
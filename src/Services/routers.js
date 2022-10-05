import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/home/Home.jsx"
import Error from "../Pages/error/Error.jsx"
import Pag01 from "../Pages/pagina01/pagina01.jsx"
import Pag02 from "../Pages/pagina02/pagina02.jsx";
import Pag03 from "../Pages/pagina03/pagina03.jsx";
import Pag04 from "../Pages/pagina04/pagina04.jsx";
import Pag05 from "../Pages/pagina05/pagina05.jsx";

export default function Routers() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pag01" element={<Pag01 />} />
          <Route path="/Pag02" element={<Pag02 />} />
          <Route path="/Pag03" element={<Pag03 />} />
          <Route path="/Pag04" element={<Pag04 />} />
          <Route path="/Pag05" element={<Pag05 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}
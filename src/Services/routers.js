import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/home/Home.jsx"
import Error from "../Pages/error/Error.jsx"

export default function Routers() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}
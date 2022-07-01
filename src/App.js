import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Acerca from "./components/pages/Acerca"
import Contacto from "./components/pages/Contacto"
import Home from "./components/pages/Home"
import Literatura from "./components/pages/Literatura"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/Acerca" element={<Acerca />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Literatura" element={<Literatura />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

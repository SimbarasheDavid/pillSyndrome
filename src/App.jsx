import NavBar from "./components/NavBar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CategoriesPage from "./pages/CategoriesPage"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/categories" element={<CategoriesPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

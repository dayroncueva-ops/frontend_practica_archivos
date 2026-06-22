import { Routes, Route, Navigate } from "react-router-dom"

import Login from "./pages/Login"
import Animes from "./pages/Animes"
import Favorites from "./pages/Favorites"
import History from "./pages/History"

import PrivateRoutes from "./routes/PrivateRoutes"

function App() {
  return (
    <Routes>
      {/* ruta base */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* públicas */}
      <Route path="/login" element={<Login />} />

      {/* privadas */}
      <Route
        path="/animes"
        element={
          <PrivateRoutes>
            <Animes />
          </PrivateRoutes>
        }
      />

      <Route
        path="/favorites"
        element={
          <PrivateRoutes>
            <Favorites />
          </PrivateRoutes>
        }
      />

      <Route
        path="/history"
        element={
          <PrivateRoutes>
            <History />
          </PrivateRoutes>
        }
      />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
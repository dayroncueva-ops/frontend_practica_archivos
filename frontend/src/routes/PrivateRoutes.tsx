import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

export default function PrivateRoutes({ children }: { children: React.ReactNode }) {
  const auth = useContext(AuthContext)

  if (!auth) return null

  if (!auth.email) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (!auth) return

    // 🔥 aquí simulas o llamas API
    const isValid = email.length > 0 && password.length > 0

    if (!isValid) {
      alert("Completa los campos")
      return
    }

    // ✅ login real (guardar sesión)
    auth.login(email)

    // 🚀 redirección
    navigate("/animes")
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}
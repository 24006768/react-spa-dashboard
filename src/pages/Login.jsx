import "../style.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();  // MUST BE HERE
  const navigate = useNavigate();

  const handleLogin = () => {
    login();   // IF login undefined → error
    navigate("/dashboard");
  };

  return (
    <div className="center-box">
      <h2>Login</h2>
      <button className="btn" onClick={handleLogin}>Login Now</button>
    </div>
  );
}

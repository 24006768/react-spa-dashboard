import "../style.css";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout() {
  const { logout } = useAuth();

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3>Dashboard</h3>
        <nav>
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
          <Link to="/dashboard/notifications">Notifications</Link>
        </nav>

        <button className="btn logout" onClick={logout}>Logout</button>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

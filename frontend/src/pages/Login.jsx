import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    navigate(`/${role}`);
  };

  return (
    <div className="login-page">
      <div className="card login-card shadow">
        <div className="card-body p-4 p-md-5">

          <h2 className="brand text-center mb-2">
            Attend<span>X</span>
          </h2>

          <p className="text-muted text-center mb-4">
            Student Attendance Management System
          </p>

          <form onSubmit={handleLogin}>
            <label className="form-label">Login as</label>

            <select
              className="form-select mb-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>

            <label className="form-label">Email / Enrollment Number</label>

            <input
              className="form-control mb-3"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="form-label">Password</label>

            <input
              className="form-control mb-4"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-primary w-100">
              Login
            </button>
          </form>

          <p className="text-center text-muted mt-4 small">
            © 2026 AttendX
          </p>

        </div>
      </div>
    </div>
  );
}
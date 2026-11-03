import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function DynamicQR() {
  const navigate = useNavigate();

  const [session, setSession] = useState(null);
  const [countdown, setCountdown] = useState(20);
  const [token, setToken] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('attendx_session');

    if (!saved) {
      navigate('/teacher/start-session');
      return;
    }

    setSession(JSON.parse(saved));
  }, [navigate]);

  useEffect(() => {
    if (!session) return;

    const generateToken = () => {
      const newToken = `${session.id}-${Math.floor(Date.now() / 20000)}`;
      setToken(newToken);
      setCountdown(20 - (Math.floor(Date.now() / 1000) % 20));
    };

    generateToken();

    const timer = setInterval(generateToken, 1000);

    return () => clearInterval(timer);
  }, [session]);

  const endSession = () => {
    localStorage.removeItem('attendx_session');
    navigate('/teacher');
  };

  if (!session) return <p className="p-4">Loading session...</p>;

  return (
    <div className="app-layout">
      <Sidebar role="teacher" />

      <main className="main-content">
        <Navbar name="Mr. Sharma" />

        <div className="page-content text-center">
          <h3>Dynamic QR Attendance</h3>
          <p className="text-muted">Students can scan this QR code to mark attendance.</p>

          <div className="card qr-card mx-auto mt-4">
            <div className="card-body p-4">

              <span className="badge bg-success mb-3">Session Active</span>

              <h5>{session.subject}</h5>
              <p className="text-muted">{session.className} | {session.room}</p>

              <div className="qr-container my-4">
                {token && (
                  <QRCodeSVG value={token} size={220} />
                )}
              </div>

              <h2 className="text-primary">{countdown}s</h2>
              <p className="text-muted">QR refreshes every 20 seconds</p>

              <p className="small">Session ID: {session.id}</p>

              <button className="btn btn-danger mt-2" onClick={endSession}>
                End Attendance Session
              </button>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
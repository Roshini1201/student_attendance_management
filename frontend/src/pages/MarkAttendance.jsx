import { useState } from 'react';
import { MapPin, QrCode, ScanFace, CheckCircle } from 'lucide-react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function MarkAttendance() {
  const [step, setStep] = useState(0);
  const [locationStatus, setLocationStatus] = useState('Not verified');
  const [qrCode, setQrCode] = useState('');
  const [message, setMessage] = useState('');

  const [location, setLocation] = useState(null);

  const verifyGPS = () => {
    if (!navigator.geolocation) {
      setMessage('Geolocation is not supported by your browser.');
      return;
    }

    setMessage('Checking your location...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });

        setLocationStatus('Location detected');
        setStep(1);
        setMessage('Location detected successfully. Classroom distance verification requires configured classroom coordinates.');
      },
      () => {
        setMessage('Unable to access location. Please enable location permission.');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const verifyQR = () => {
    if (!qrCode.trim()) {
      setMessage('Please enter the QR session code.');
      return;
    }

    const saved = localStorage.getItem('attendx_session');

    if (!saved) {
      setMessage('No active demo attendance session found.');
      return;
    }

    const session = JSON.parse(saved);
    const expectedToken =
      `${session.id}-${Math.floor(Date.now() / 20000)}`;

    if (qrCode.trim() !== expectedToken) {
      setMessage('Invalid or expired QR code. Try again.');
      return;
    }

    setStep(2);
    setMessage('QR code accepted for this demo session.');
  };

  const verifyFace = () => {
    // DEMO ONLY: This does not perform actual face recognition.
    setStep(3);
    setMessage('Demo verification completed.');
  };

  const steps = [
    { name: 'GPS Verification', icon: <MapPin /> },
    { name: 'QR Verification', icon: <QrCode /> },
    { name: 'Face Verification', icon: <ScanFace /> },
    { name: 'Completed', icon: <CheckCircle /> }
  ];

  return (
    <div className="app-layout">
      <Sidebar role="student" />

      <main className="main-content">
        <Navbar name="Rahul" />

        <div className="page-content">
          <h3>Mark Attendance</h3>
          <p className="text-muted mb-4">
            Complete all verification steps to mark your attendance.
          </p>

          <div className="card verification-card mx-auto">
            <div className="card-body p-4">

              <div className="verification-steps mb-4">
                {steps.map((item, i) => (
                  <div
                    key={i}
                    className={`verification-step ${step >= i ? 'completed' : ''}`}
                  >
                    <div className="step-icon">{item.icon}</div>
                    <small>{item.name}</small>
                  </div>
                ))}
              </div>

              {step === 0 && (
                <div className="text-center py-4">
                  <MapPin size={55} className="text-primary mb-3" />

                  <h5>GPS Location Verification</h5>

                  <p className="text-muted">
                    Allow location access to detect your current position.
                  </p>

                  <button className="btn btn-primary" onClick={verifyGPS}>
                    Verify My Location
                  </button>
                </div>
              )}

              {step === 1 && (
                <div className="text-center py-4">
                  <QrCode size={55} className="text-primary mb-3" />

                  <h5>QR Code Verification</h5>

                  <p className="text-muted">
                    Enter the current QR session code displayed by your teacher.
                  </p>

                  <input
                    className="form-control mb-3"
                    placeholder="Enter QR session code"
                    value={qrCode}
                    onChange={(e) => setQrCode(e.target.value)}
                  />

                  <button className="btn btn-primary" onClick={verifyQR}>
                    Verify QR Code
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="text-center py-4">
                  <ScanFace size={55} className="text-primary mb-3" />

                  <h5>Face Verification</h5>

                  <p className="text-muted">
                    Face verification will be connected to the camera and
                    recognition system in the next development phase.
                  </p>

                  <button className="btn btn-primary" onClick={verifyFace}>
                    Complete Demo Verification
                  </button>
                </div>
              )}

              {step === 3 && (
                <div className="text-center py-4">
                  <CheckCircle size={65} className="text-success mb-3" />

                  <h4 className="text-success">Verification Completed!</h4>

                  <p className="text-muted">
                    All demo verification steps have been completed.
                  </p>

                  <span className="badge bg-success p-2">
                    Demo Attendance Successful
                  </span>

                  {location && (
                    <p className="small text-muted mt-3">
                      GPS: {location.latitude.toFixed(5)}, {location.longitude.toFixed(5)}
                    </p>
                  )}

                  <button
                    className="btn btn-outline-primary d-block mx-auto mt-3"
                    onClick={() => {
                      setStep(0);
                      setQrCode('');
                      setMessage('');
                      setLocation(null);
                      setLocationStatus('Not verified');
                    }}
                  >
                    Start Again
                  </button>
                </div>
              )}

              {message && (
                <div className="alert alert-info mt-3">
                  {message}
                </div>
              )}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
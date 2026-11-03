import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function StartSession() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    subject: '',
    className: '',
    room: '',
    duration: '60'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const startSession = (e) => {
    e.preventDefault();

    if (!form.subject || !form.className || !form.room) {
      alert('Please fill all fields');
      return;
    }

    const session = {
      ...form,
      id: `ATT-${Date.now()}`,
      startTime: Date.now(),
      active: true
    };

    localStorage.setItem('attendx_session', JSON.stringify(session));

    navigate('/teacher/qr');
  };

  return (
    <div className="app-layout">
      <Sidebar role="teacher" />

      <main className="main-content">
        <Navbar name="Mr. Sharma" />

        <div className="page-content">
          <h3>Start Attendance Session</h3>
          <p className="text-muted mb-4">Create a new class attendance session.</p>

          <div className="card session-card">
            <div className="card-body p-4">
              <form onSubmit={startSession}>

                <div className="mb-3">
                  <label className="form-label">Select Subject</label>
                  <select
                    className="form-select"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="">Choose Subject</option>
                    <option>Machine Learning</option>
                    <option>Data Structures</option>
                    <option>Database Management</option>
                    <option>Computer Networks</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Class / Section</label>
                  <select
                    className="form-select"
                    name="className"
                    value={form.className}
                    onChange={handleChange}
                  >
                    <option value="">Choose Class</option>
                    <option>CSE-A</option>
                    <option>CSE-B</option>
                    <option>IT-A</option>
                    <option>ECE-A</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Classroom</label>
                  <input
                    className="form-control"
                    name="room"
                    placeholder="Example: Room 204"
                    value={form.room}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Session Duration</label>
                  <select
                    className="form-select"
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                  >
                    <option value="30">30 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                  </select>
                </div>

                <button className="btn btn-primary w-100">
                  Generate QR & Start Session
                </button>

              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
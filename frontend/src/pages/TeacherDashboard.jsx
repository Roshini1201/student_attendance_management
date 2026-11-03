import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, CalendarCheck, Clock } from 'lucide-react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import AttendanceBadge from '../components/AttendanceBadge';

export default function TeacherDashboard() {
  const navigate = useNavigate();

  const sessions = [
    { subject: 'Machine Learning', class: 'CSE-A', time: '10:00 AM', status: 'Active' },
    { subject: 'Data Structures', class: 'CSE-B', time: '09:00 AM', status: 'Present' },
    { subject: 'Computer Networks', class: 'CSE-A', time: '11:00 AM', status: 'Pending' }
  ];

  return (
    <div className="app-layout">
      <Sidebar role="teacher" />

      <main className="main-content">
        <Navbar name="Mr. Sharma" />

        <div className="page-content">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
            <div>
              <h3>Teacher Dashboard</h3>
              <p className="text-muted">Manage your classes and attendance.</p>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => navigate('/teacher/start-session')}
            >
              + Start Attendance
            </button>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-3">
              <StatCard title="Total Students" value="120" subtitle="Across all classes" icon={<Users />} color="blue" />
            </div>

            <div className="col-md-3">
              <StatCard title="Assigned Subjects" value="4" subtitle="This semester" icon={<BookOpen />} color="purple" />
            </div>

            <div className="col-md-3">
              <StatCard title="Today's Sessions" value="5" subtitle="Scheduled classes" icon={<CalendarCheck />} color="green" />
            </div>

            <div className="col-md-3">
              <StatCard title="Active Sessions" value="1" subtitle="Currently running" icon={<Clock />} color="orange" />
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="mb-3">Recent Attendance Sessions</h5>

              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Class</th>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {sessions.map((s, i) => (
                      <tr key={i}>
                        <td>{s.subject}</td>
                        <td>{s.class}</td>
                        <td>{s.time}</td>
                        <td><AttendanceBadge status={s.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
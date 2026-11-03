import { useNavigate } from 'react-router-dom';
import { BookOpen, CalendarCheck, Clock, Percent } from 'lucide-react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import AttendanceBadge from '../components/AttendanceBadge';

export default function StudentDashboard() {
  const navigate = useNavigate();

  const subjects = [
    { name: 'Data Structures', attended: 28, total: 30 },
    { name: 'Database Management', attended: 24, total: 30 },
    { name: 'Computer Networks', attended: 20, total: 25 },
    { name: 'Machine Learning', attended: 18, total: 20 }
  ];

  const records = [
    { subject: 'Data Structures', date: '03 Nov 2026', status: 'Present' },
    { subject: 'Machine Learning', date: '02 Nov 2026', status: 'Present' },
    { subject: 'Computer Networks', date: '02 Nov 2026', status: 'Absent' }
  ];

  return (
    <div className="app-layout">
      <Sidebar role="student" />

      <main className="main-content">
        <Navbar name="Rahul" />

        <div className="page-content">
          <div className="d-flex justify-content-between flex-wrap mb-4">
            <div>
              <h3>Student Dashboard</h3>
              <p className="text-muted">Here's your attendance overview.</p>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => navigate('/student/attendance')}
            >
              Mark Attendance
            </button>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-3">
              <StatCard title="Overall Attendance" value="86.4%" subtitle="Good standing" icon={<Percent />} color="blue" />
            </div>

            <div className="col-md-3">
              <StatCard title="Total Classes" value="105" subtitle="This semester" icon={<BookOpen />} color="purple" />
            </div>

            <div className="col-md-3">
              <StatCard title="Present Classes" value="90" subtitle="Classes attended" icon={<CalendarCheck />} color="green" />
            </div>

            <div className="col-md-3">
              <StatCard title="Pending Classes" value="3" subtitle="Today's schedule" icon={<Clock />} color="orange" />
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="mb-3">Subject-wise Attendance</h5>

              {subjects.map((subject) => {
                const percentage = Math.round(
                  subject.attended / subject.total * 100
                );

                return (
                  <div className="mb-4" key={subject.name}>
                    <div className="d-flex justify-content-between mb-2">
                      <span>{subject.name}</span>
                      <strong>{percentage}%</strong>
                    </div>

                    <div className="progress">
                      <div
                        className={`progress-bar ${percentage < 75 ? 'bg-danger' : 'bg-primary'}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="mb-3">Recent Attendance</h5>

              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {records.map((record, i) => (
                      <tr key={i}>
                        <td>{record.subject}</td>
                        <td>{record.date}</td>
                        <td><AttendanceBadge status={record.status} /></td>
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
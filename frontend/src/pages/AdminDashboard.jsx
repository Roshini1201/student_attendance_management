import { Users, GraduationCap, BookOpen, Percent } from 'lucide-react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';

export default function AdminDashboard() {
  const students = [
    { name: 'Rahul Sharma', id: 'STU001', className: 'CSE-A', attendance: '92%' },
    { name: 'Priya Singh', id: 'STU002', className: 'CSE-A', attendance: '85%' },
    { name: 'Aman Kumar', id: 'STU003', className: 'CSE-B', attendance: '68%' },
    { name: 'Neha Verma', id: 'STU004', className: 'IT-A', attendance: '89%' }
  ];

  return (
    <div className="app-layout">
      <Sidebar role="admin" />

      <main className="main-content">
        <Navbar name="Administrator" />

        <div className="page-content">
          <h3>Admin Dashboard</h3>
          <p className="text-muted mb-4">Institution overview and management.</p>

          <div className="row g-3 mb-4">
            <div className="col-md-3">
              <StatCard title="Total Students" value="1,250" subtitle="Registered students" icon={<Users />} color="blue" />
            </div>

            <div className="col-md-3">
              <StatCard title="Total Teachers" value="85" subtitle="Active teachers" icon={<GraduationCap />} color="purple" />
            </div>

            <div className="col-md-3">
              <StatCard title="Total Classes" value="32" subtitle="Across departments" icon={<BookOpen />} color="green" />
            </div>

            <div className="col-md-3">
              <StatCard title="Attendance Today" value="87%" subtitle="Institution average" icon={<Percent />} color="orange" />
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="mb-3">Student Overview</h5>

              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Student ID</th>
                      <th>Class</th>
                      <th>Attendance</th>
                    </tr>
                  </thead>

                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.id}</td>
                        <td>{student.className}</td>
                        <td>{student.attendance}</td>
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
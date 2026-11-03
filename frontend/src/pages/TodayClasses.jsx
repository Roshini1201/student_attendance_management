import { useNavigate } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AttendanceBadge from '../components/AttendanceBadge';

export default function TodayClasses() {
  const navigate = useNavigate();

  const classes = [
    { subject: 'Data Structures', teacher: 'Mr. Sharma', time: '09:00 - 10:00 AM', room: 'Room 101', status: 'Completed' },
    { subject: 'Machine Learning', teacher: 'Ms. Priya', time: '10:00 - 11:00 AM', room: 'Room 202', status: 'Pending' },
    { subject: 'Computer Networks', teacher: 'Mr. Kumar', time: '11:00 - 12:00 PM', room: 'Room 103', status: 'Pending' },
    { subject: 'Database Management', teacher: 'Ms. Anjali', time: '01:00 - 02:00 PM', room: 'Room 204', status: 'Pending' }
  ];

  return (
    <div className="app-layout">
      <Sidebar role="student" />

      <main className="main-content">
        <Navbar name="Rahul" />

        <div className="page-content">
          <h3>Today's Classes</h3>
          <p className="text-muted mb-4">Your daily class schedule</p>

          {classes.map((item, i) => (
            <div className="card mb-3" key={i}>
              <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div>
                  <h5>{item.subject}</h5>
                  <p className="text-muted mb-1">{item.teacher}</p>
                  <small>{item.time} | {item.room}</small>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <AttendanceBadge status={item.status === 'Completed' ? 'Present' : item.status} />

                  {item.status === 'Pending' && (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate('/student/attendance')}
                    >
                      Mark Attendance
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
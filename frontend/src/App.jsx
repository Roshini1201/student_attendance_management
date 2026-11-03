import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import TodayClasses from './pages/TodayClasses';
import StartSession from './pages/StartSession';
import DynamicQR from './pages/DynamicQR';
import MarkAttendance from './pages/MarkAttendance';
import ManageStudents from './pages/ManageStudents';
import ManageSubjects from './pages/ManageSubjects';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/classes" element={<TodayClasses />} />
        <Route path="/student/attendance" element={<MarkAttendance />} />

        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/start-session" element={<StartSession />} />
        <Route path="/teacher/qr" element={<DynamicQR />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<ManageStudents />} />
        <Route path="/admin/subjects" element={<ManageSubjects />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
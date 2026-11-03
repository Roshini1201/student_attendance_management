import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, CalendarDays, ClipboardCheck,
    QrCode, Users, BookOpen, LogOut
} from 'lucide-react';

export default function Sidebar({ role = 'student' }) {
    const navigate = useNavigate();

    const menus = {
        student: [
            { label: 'Dashboard', path: '/student', icon: LayoutDashboard },
            { label: 'My Classes', path: '/student/classes', icon: CalendarDays },
            { label: 'Mark Attendance', path: '/student/attendance', icon: ClipboardCheck }
        ],
        teacher: [
            { label: 'Dashboard', path: '/teacher', icon: LayoutDashboard },
            { label: 'Start Session', path: '/teacher/start-session', icon: QrCode },
            { label: 'QR Session', path: '/teacher/qr', icon: ClipboardCheck }
        ],
        admin: [
            { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
            { label: 'Students', path: '/admin/students', icon: Users },
            { label: 'Subjects', path: '/admin/subjects', icon: BookOpen }
        ]
    };

    return (
        <aside className="sidebar">
            <h3 className="brand">Attend<span>X</span></h3>

            <p className="menu-label">{role.toUpperCase()} MENU</p>

            {menus[role].map((item) => {
                const Icon = item.icon;

                return (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        end={item.path === `/${role}`}
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? 'active' : ''}`
                        }
                    >
                        <Icon size={19} />
                        {item.label}
                    </NavLink>
                );
            })}

            <button
                className="sidebar-link logout-btn"
                onClick={() => navigate('/')}
            >
                <LogOut size={19} />
                Logout
            </button>
        </aside>
    );
}
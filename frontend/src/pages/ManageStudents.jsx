
import { useState } from 'react';
import { Search, Plus, Pencil, Trash2 } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function ManageStudents() {
  const [students, setStudents] = useState([
    { id: 'STU001', name: 'Rahul Sharma', email: 'rahul@gmail.com', className: 'CSE-A' },
    { id: 'STU002', name: 'Priya Singh', email: 'priya@gmail.com', className: 'CSE-A' },
    { id: 'STU003', name: 'Aman Kumar', email: 'aman@gmail.com', className: 'CSE-B' },
    { id: 'STU004', name: 'Neha Verma', email: 'neha@gmail.com', className: 'IT-A' }
  ]);

  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: '', email: '', className: ''
  });

  const saveStudent = (e) => {
    e.preventDefault();

    if (editingId) {
      setStudents(students.map(s =>
        s.id === editingId ? { ...s, ...form } : s
      ));
    } else {
      setStudents([...students, {
        id: `STU${String(Date.now()).slice(-6)}`,
        ...form
      }]);
    }

    setShowForm(false);
    setEditingId(null);
    setForm({ name: '', email: '', className: '' });
  };

  const editStudent = (student) => {
    setEditingId(student.id);
    setForm({
      name: student.name,
      email: student.email,
      className: student.className
    });
    setShowForm(true);
  };

  const deleteStudent = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const filtered = students.filter(s =>
    `${s.name} ${s.id} ${s.email} ${s.className}`
      .toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-layout">
      <Sidebar role="admin" />

      <main className="main-content">
        <Navbar name="Administrator" />

        <div className="page-content">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
            <div>
              <h3>Manage Students</h3>
              <p className="text-muted">View and manage registered students.</p>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => {
                setEditingId(null);
                setForm({ name: '', email: '', className: '' });
                setShowForm(true);
              }}
            >
              <Plus size={17} className="me-1" />
              Add Student
            </button>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <div className="row g-3 align-items-center">
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <Search size={17} />
                    </span>
                    <input
                      className="form-control"
                      placeholder="Search students..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6 text-md-end">
                  <span className="text-muted">
                    Total Students: <strong>{students.length}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {showForm && (
            <div className="card mb-4">
              <div className="card-body">
                <h5>{editingId ? 'Edit Student' : 'Add New Student'}</h5>

                <form onSubmit={saveStudent}>
                  <div className="row g-3 mt-1">
                    <div className="col-md-4">
                      <label className="form-label">Full Name</label>
                      <input
                        required
                        className="form-control"
                        value={form.name}
                        onChange={e => setForm({...form, name:e.target.value})}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Email</label>
                      <input
                        required
                        type="email"
                        className="form-control"
                        value={form.email}
                        onChange={e => setForm({...form, email:e.target.value})}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Class</label>
                      <select
                        required
                        className="form-select"
                        value={form.className}
                        onChange={e => setForm({...form, className:e.target.value})}
                      >
                        <option value="">Select Class</option>
                        <option>CSE-A</option>
                        <option>CSE-B</option>
                        <option>IT-A</option>
                        <option>ECE-A</option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex gap-2 mt-4">
                    <button className="btn btn-primary">
                      {editingId ? 'Save Changes' : 'Add Student'}
                    </button>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Student ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Class</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filtered.map(s => (
                      <tr key={s.id}>
                        <td>{s.id}</td>
                        <td className="fw-semibold">{s.name}</td>
                        <td>{s.email}</td>
                        <td>{s.className}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary me-2"
                            onClick={() => editStudent(s)}
                          >
                            <Pencil size={15}/>
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteStudent(s.id)}
                          >
                            <Trash2 size={15}/>
                          </button>
                        </td>
                      </tr>
                    ))}

                    {filtered.length === 0 && (
                      <tr>
                        <td colSpan="5" className="text-center py-4">
                          No students found.
                        </td>
                      </tr>
                    )}
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

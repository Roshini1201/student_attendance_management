
import { useState } from 'react';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function ManageSubjects() {
  const [subjects, setSubjects] = useState([
    { id: 'SUB001', name: 'Data Structures', code: 'CS201', teacher: 'Mr. Sharma', classes: 'CSE-A' },
    { id: 'SUB002', name: 'Machine Learning', code: 'CS305', teacher: 'Ms. Priya', classes: 'CSE-A' },
    { id: 'SUB003', name: 'Database Management', code: 'CS202', teacher: 'Mr. Kumar', classes: 'CSE-B' },
    { id: 'SUB004', name: 'Computer Networks', code: 'CS303', teacher: 'Ms. Anjali', classes: 'IT-A' }
  ]);

  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const emptyForm = {
    name: '', code: '', teacher: '', classes: ''
  };

  const [form, setForm] = useState(emptyForm);

  const saveSubject = (e) => {
    e.preventDefault();

    if (editingId) {
      setSubjects(subjects.map(s =>
        s.id === editingId ? { ...s, ...form } : s
      ));
    } else {
      setSubjects([...subjects, {
        id: `SUB${String(Date.now()).slice(-6)}`,
        ...form
      }]);
    }

    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const editSubject = (subject) => {
    setEditingId(subject.id);
    setForm({
      name: subject.name,
      code: subject.code,
      teacher: subject.teacher,
      classes: subject.classes
    });
    setShowForm(true);
  };

  const deleteSubject = (id) => {
    if (window.confirm('Delete this subject?')) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const filtered = subjects.filter(s =>
    `${s.name} ${s.code} ${s.teacher} ${s.classes}`
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
              <h3>Manage Subjects</h3>
              <p className="text-muted">Manage academic subjects and assignments.</p>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => {
                setEditingId(null);
                setForm(emptyForm);
                setShowForm(true);
              }}
            >
              <Plus size={17} className="me-1" />
              Add Subject
            </button>
          </div>

          <div className="card mb-4">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-3">
              <div className="input-group" style={{maxWidth:400}}>
                <span className="input-group-text bg-white">
                  <Search size={17}/>
                </span>
                <input
                  className="form-control"
                  placeholder="Search subjects..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>

              <span className="text-muted">
                Total Subjects: <strong>{subjects.length}</strong>
              </span>
            </div>
          </div>

          {showForm && (
            <div className="card mb-4">
              <div className="card-body">
                <h5>{editingId ? 'Edit Subject' : 'Add New Subject'}</h5>

                <form onSubmit={saveSubject}>
                  <div className="row g-3 mt-1">
                    <div className="col-md-6">
                      <label className="form-label">Subject Name</label>
                      <input
                        required
                        className="form-control"
                        value={form.name}
                        onChange={e => setForm({...form, name:e.target.value})}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Subject Code</label>
                      <input
                        required
                        className="form-control"
                        value={form.code}
                        onChange={e => setForm({...form, code:e.target.value})}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Assigned Teacher</label>
                      <input
                        required
                        className="form-control"
                        value={form.teacher}
                        onChange={e => setForm({...form, teacher:e.target.value})}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Class / Section</label>
                      <select
                        required
                        className="form-select"
                        value={form.classes}
                        onChange={e => setForm({...form, classes:e.target.value})}
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
                      {editingId ? 'Save Changes' : 'Add Subject'}
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
                      <th>Subject Code</th>
                      <th>Subject Name</th>
                      <th>Teacher</th>
                      <th>Class</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filtered.map(s => (
                      <tr key={s.id}>
                        <td>{s.code}</td>
                        <td className="fw-semibold">{s.name}</td>
                        <td>{s.teacher}</td>
                        <td>{s.classes}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary me-2"
                            onClick={() => editSubject(s)}
                          >
                            <Pencil size={15}/>
                          </button>

                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteSubject(s.id)}
                          >
                            <Trash2 size={15}/>
                          </button>
                        </td>
                      </tr>
                    ))}

                    {filtered.length === 0 && (
                      <tr>
                        <td colSpan="5" className="text-center py-4">
                          No subjects found.
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

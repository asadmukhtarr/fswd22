import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Students = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false); // Loading state
    const [name, setName] = useState();
    const [email, setEmail] = useState("sample@email.com");
    const [whatsapp, setWhatsapp] = useState("00000000000");
    const [city, setCity] = useState("Lahore");

    function saveStudent() {
        const student = {
            name: name,
            email: email,
            whatsapp: whatsapp,
            city: city,
        };
        fetch("https://67375936aafa2ef222337ff0.mockapi.io/students/students", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }

    async function alumin() {
        setLoading(true); // Start loading
        const response = await fetch("https://67375936aafa2ef222337ff0.mockapi.io/students/students");
        const data = await response.json();
        setStudents(data.reverse());
        setLoading(false); // End loading
    }

    const delete_student = (id) => {
        const url = `https://67375936aafa2ef222337ff0.mockapi.io/students/students/${id}`;
        if (window.confirm("Are you sure you want to delete it")) {
            fetch(url, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alumin(); // Refresh list after deletion
            });
        }
    };

    useEffect(() => {
        alumin();
    }, []);

    return (
        <div>
            <div className="row mt-3">
                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-header">
                           <i className="fas fa-user-plus"></i> Create New Student
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Name Is : {name}</label>
                                <input className="form-control" onChange={e => setName(e.target.value)}  />
                            </div>
                            <div className="form-group mt-1">
                                <label>Email Is: {email}</label>
                                <input className="form-control" onChange={e => setEmail(e.target.value)}  />
                            </div>
                            <div className="form-group mt-1">
                                <label>WhatsApp Is : {whatsapp}</label>
                                <input className="form-control" onChange={e => setWhatsapp(e.target.value)}  />
                            </div>
                            <div className="form-group mt-1">
                                <label>City Is: {city}</label>
                                <input className="form-control" onChange={e => setCity(e.target.value)}  />
                            </div>
                            <div className="form-group mt-2">
                                <button className="btn btn-danger" onClick={saveStudent}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4>Student List</h4>
                        </div>
                        <div>
                            {loading ? ( // Display loading indicator
                                <p className="text-center p-5"> <i className="fa fa-spinner fa-spin"></i> Loading...</p>
                            ) : (
                                <table className="table table-bordered table-striped">
                                    <thead className="table-light">
                                        <tr>
                                            <th><i className="fa fa-user"></i> Name</th>
                                            <th><i className="fa fa-envelope"></i> Email</th>
                                            <th><i className="fa fa-whatsapp"></i> WhatsApp</th>
                                            <th><i className="fa fa-city"></i> City</th>
                                            <th><i className="fa fa-cogs"></i> Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((student) => (
                                            <tr key={student.id}>
                                                <td>{student.name}</td>
                                                <td>{student.email}</td>
                                                <td>{student.whatsapp}</td>
                                                <td>{student.city}</td>
                                                <td>
                                                    <Link to={`/edit/${student.id}`}>
                                                        <button className="btn btn-sm btn-warning me-2">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                    </Link>
                                                    <button className="btn btn-sm btn-danger" onClick={() => delete_student(student.id)}>
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Students;

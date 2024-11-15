import { useState, useEffect } from "react";
const Students = () => {
    const [students,setStudents] = useState([]);
    const [name, setName] = useState();
    const [email,setEmail] = useState("sample@email.com");
    const [whatsapp , setWhatsapp] = useState("00000000000");
    const [city,setcity] = useState("Lahore");
    const [gender,setGender] = useState();
    function saveStudent(){
        const student = {
            name:name,
            email:email,
            whatsapp:whatsapp,
            city:city,
            gender:gender
        }
        console.log("Form Data:", student);
    }
    const alumins = () => {
        var url = "https://67375936aafa2ef222337ff0.mockapi.io/students/students";
        fetch(url).then(response => response.json()).then(data => {
            setStudents(data);
        })
    }
    useEffect(() => {
        alumins();
    });
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
                                <label>Name Is : { name }</label>
                                <input className="form-control" onChange={e => setName(e.target.value)}  />
                            </div>
                            <div className="form-group mt-1">
                                <label>Email Is: { email }</label>
                                <input className="form-control" onChange={e => setEmail(e.target.value)}  />
                            </div>
                            <div className="form-group mt-1">
                                <label>What's App Is : {whatsapp} </label>
                                <input className="form-control" onChange={e => setWhatsapp(e.target.value)}  />
                            </div>
                            <div className="form-group mt-1">
                                <label>City Is: {city} </label>
                                <input className="form-control" onChange={e => setcity(e.target.value)}  />
                            </div>
                            <div className="form-group mt-1">
                                <label>Gender is: {gender}</label> <br />
                                Male <input type="radio" name="gender" onChange={e => setGender(e.target.value)} value="m" />
                                Female <input type="radio" name="gender" onChange={e => setGender(e.target.value)} value="f" />
                            </div>
                            <div className="form-group mt-2">
                                <button className="btn btn-danger" onClick={saveStudent}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4>Student List</h4>
                        </div>
                        <div>
                            <table class="table table-bordered table-striped">
                                <thead class="table-light">
                                    <tr>
                                        <th><i class="fas fa-user"></i> Name</th>
                                        <th><i class="fas fa-envelope"></i> Email</th>
                                        <th><i class="fab fa-whatsapp"></i> WhatsApp</th>
                                        <th><i class="fas fa-city"></i> City</th>
                                        <th><i class="fas fa-venus-mars"></i> Gender</th>
                                        <th><i class="fas fa-cogs"></i> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { students.map((student) => (
                                    <tr>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.whatsapp}</td>
                                        <td>{student.city}</td>
                                        <td>{student.gender}</td>
                                        <td>
                                            <button class="btn btn-sm btn-warning me-2">
                                                <i class="fas fa-edit"></i>
                                            </button>
                                            <button class="btn btn-sm btn-danger">
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    ))}   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Students;
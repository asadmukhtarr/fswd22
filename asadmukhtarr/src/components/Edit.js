import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const Edit = () => {
    const {id} = useParams();
    const [name, setName] = useState();
    const [email,setEmail] = useState();
    const [whatsapp , setWhatsapp] = useState();
    const [city,setcity] = useState();
    const saveStudent = () => {
        const student = {
            name:name,
            email:email,
            whatsapp:whatsapp,
            city:city,
        }
        console.log(student);
    }
    const studentedit = () => {
        fetch("https://67375936aafa2ef222337ff0.mockapi.io/students/students/"+id)
        .then(response => response.json())
        .then(data => {
            setName(data.name);
            setEmail(data.email);
            setWhatsapp(data.whatsapp);
            setcity(data.city);
            console.log(data);
        })
    }
    useEffect(() => {
        studentedit();
        console.log(id);
    });
    return (
        <div>
            <h2>Edit .. </h2>
            <div className="row">
                <div className="col-lg-5">
                <div className="card">
                        <div className="card-header">
                           <i className="fas fa-user-plus"></i> Create New Student
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" value={name} onChange={e => setName(e.target.value)}  />
                            </div>
                            <div className="form-group mt-1">
                                <label>Email Is: { email }</label>
                                <input className="form-control" value={email} onChange={e => setEmail(e.target.value)}  />
                            </div>
                            <div className="form-group mt-1">
                                <label>What's App Is : {whatsapp} </label>
                                <input className="form-control" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}  />
                            </div>
                            <div className="form-group mt-1">
                                <label>City Is: {city} </label>
                                <input className="form-control" value={city} onChange={e => setcity(e.target.value)}  />
                            </div>
                            <div className="form-group mt-2">
                                <button className="btn btn-danger" onClick={saveStudent}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Edit;
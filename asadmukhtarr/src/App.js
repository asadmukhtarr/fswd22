import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Students from "./components/Students";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Edit from "./components/Edit";
const App = () => {
    return (
       <div>
            <Header />
            <div className="container-fluid p-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
       </div>
    )
}
export default App;
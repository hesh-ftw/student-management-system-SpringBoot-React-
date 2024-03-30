import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import NavBar from "./component/common/NavBar.js";
import Home from "./Home.js";
import StudentView from './component/student/StudentView';
import{BrowserRouter as Router, Routers, Route, Routes} from "react-router-dom";
import AddStudent from "./component/student/AddStudent.js";
import AddCourse from "./component/student/AddCourse.js";
import EditStudent from "./component/student/EditStudent.js";

function App() {
  return (
    <main className="container mt-5">
      

      <Router>
         <NavBar/> 
        <Routes>
          
          <Route
              exact 
              path="/" 
              element={<Home/>}>
          </Route>

          <Route
              exact 
              path="/view-students" 
              element={<StudentView/>}>
          </Route>

          <Route
              exact 
              path="/add-students" 
              element={<AddStudent/>}>
          </Route>

          <Route
              exact 
              path="/add-course" 
              element={<AddCourse/>}>
          </Route>

          <Route
              exact 
              path="/edit-student/:id" 
              element={<EditStudent/>}>
          </Route>

        </Routes>
      </Router>


    </main>
  );
}

export default App;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import NavBar from "./component/common/NavBar.js";
import Home from "./Home.js";
import StudentView from './component/student/StudentView';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import AddStudent from "./component/student/AddStudent.js";
import AddCourse from "./component/course/AddCourse.js";
import EditStudent from "./component/student/EditStudent.js";
import ViewCourse from "./component/course/ViewCourse.js";
import CourseHistory from "./component/course/CourseHistory.js";
import SignUp from "./component/Admin/SignUp.js";
import SignIn from "./component/Admin/SignIn.js";


function App() {
  return (
    <main className="container mt-5">
      <Router>
        <Routes>
            <Route
              exact path="/AdminRegister" element={<SignUp/>}>
          </Route>
        </Routes>

        <Routes>
            <Route
              exact path="/AdminSignin" element={<SignIn/>}>
          </Route>
        </Routes>
    
        <Routes>

         <Route
              exact 
              path="/Home" 

              element={<Home/>}>
          </Route>
        
          <Route
              exact 
              path="/view-students" 
              element={<StudentView/> }>
          </Route>

          <Route
              exact 
              path="/add-students" 
              element={<AddStudent/>}>
          </Route>

          <Route
              exact 
              path="/add-Course" 
              element={<AddCourse/>}>
          </Route>

          <Route
              exact 
              path="/view-Course/:id" 
              element={<ViewCourse/>}>
          </Route>

          <Route
              exact 
              path="/edit-student/:id" 
              element={<EditStudent/>}>
          </Route>

          {/* <Router>
            <Switch>
            <Route exact path="/" component={AddCourse} />
              <Route exact path="/view-course-history" component={CourseHistory} />
          </Switch>
          </Router> */}


          <Route
              exact 
              path="/view-course-history" 
              element={<CourseHistory/>}>
          </Route>

 
        </Routes>
      </Router>

      

    </main>

  );
}

export default App;

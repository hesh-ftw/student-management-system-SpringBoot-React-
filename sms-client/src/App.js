import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import NavBar from "./component/common/NavBar.js";
import Home from "./Home.js";
import StudentView from './component/student/StudentView';
import{BrowserRouter as Router, Routers, Route, Routes} from "react-router-dom";
import SearchBar from "./component/common/SearchBar.js";
import AddStudent from "./component/student/AddStudent.js";

function App() {
  return (
    <div className="App">
      

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
        </Routes>
      </Router>


    </div>
  );
}

export default App;

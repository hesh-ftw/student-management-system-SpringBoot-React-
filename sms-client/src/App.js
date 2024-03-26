import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import NavBar from "./component/common/NavBar.js";
import Home from "./Home.js";
import StudentView from './component/student/StudentView';
import{BrowserRouter as Router, Routers, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2 >welcome to student management system <p></p></h2>

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
        </Routes>
      </Router>


    </div>
  );
}

export default App;

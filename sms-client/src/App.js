import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Home from './Home';
import StudentView from './component/student/StudentView';


function App() {
  return (
    <div className="App">
      <h2>welcome to student management system</h2>
      <Home/>
      <StudentView/>

    </div>
  );
}

export default App;

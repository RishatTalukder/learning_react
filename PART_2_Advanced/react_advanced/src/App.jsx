import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Counter from "./projects/project_1/Counter";
import EmployeeList from "./projects/project_2/EmployeeList";
import Todo from "./projects/project_2/Todo";

function App() {
  return (
    <div
    className="container"
    >
      {/* <Counter></Counter> */}
      {/* <EmployeeList /> */}
      <Todo />
    </div>
  );
}

export default App;

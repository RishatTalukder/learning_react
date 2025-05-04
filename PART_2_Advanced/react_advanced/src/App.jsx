import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Counter from "./projects/project_1/Counter";
import Todo from "./projects/project_2/Todo";
import AccidentalLoopsExample from "./projects/project_3/Accidental_loops_example";
import Use_effect_counter_app from "./projects/project_3/Use_effect_counter_app";

function App() {
  return (
    <div
    className="container"
    >
      {/* <Counter></Counter> */}
      {/* <EmployeeList /> */}
      {/* <Todo /> */}
      {/* <AccidentalLoopsExample /> */}
      <Use_effect_counter_app />
    </div>
  );
}

export default App;

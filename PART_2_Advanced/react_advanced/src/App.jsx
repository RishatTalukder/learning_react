import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Counter from "./projects/project_1/Counter";
import Todo from "./projects/project_2/Todo";
import AccidentalLoopsExample from "./projects/project_3/Accidental_loops_example";
import Use_effect_counter_app from "./projects/project_3/Use_effect_counter_app";
import Users from "./projects/project_4/Users";
import Destinations from "./projects/project_5/Destinations";
import MissingData from "./missing_data_handling/MissingData";
import Form from "./form_handling/Form";
import UsersList from "./projects/project_6/UsersList";

function App() {
  return (
    <div
    className="container"
    >
      {/* <Counter></Counter> */}
      {/* <EmployeeList /> */}
      {/* <Todo /> */}
      {/* <AccidentalLoopsExample /> */}
      {/* <Use_effect_counter_app /> */}
      {/* <Users /> */}
      {/* <Destinations /> */}
      {/* <Form /> */}
      <UsersList />
    </div>
  );
}

export default App;

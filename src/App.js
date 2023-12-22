import { Provider } from "react-redux";
import AddToDo from "./component/AddToDo";
import DisplayToDo from "./component/DisplayToDo";
import store from "../src/redux/store";


function App() {


  return (
    <Provider store={store}>
      <div className="container">
        <AddToDo></AddToDo>
        <DisplayToDo></DisplayToDo>
      </div>
    </Provider>
  );
}

export default App;

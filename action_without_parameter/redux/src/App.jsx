import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { add, minus } from "./store/actions/counterAction";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  const handleAdd = () => {
    dispatch(add());
  };

  const handleMinus = () => {
    dispatch(minus());
  };

  return (
    <div className="App">
      <section>
        <button onClick={handleMinus}>-</button>
        <div className="counter">{count}</div>

        <button onClick={handleAdd}>+</button>
      </section>
    </div>
  );
}

export default App;

import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { changeAlphabet } from "./store/slice/alphabetSlice";

function App() {
  const dispatch = useDispatch();
  const alphabet = useSelector((state) => state.alphabet.text);

  const handleClick = (e) => {
    dispatch(changeAlphabet(e.target.textContent));
  };

  return (
    <div className="App">
      <section>
        <div className="flex">
          <button onClick={handleClick}>A</button>
          <button onClick={handleClick}>B</button>
          <button onClick={handleClick}>C</button>
          <button onClick={handleClick}>D</button>
        </div>
        <div>현재 선택된 알파벳은 {alphabet}</div>
      </section>
    </div>
  );
}

export default App;

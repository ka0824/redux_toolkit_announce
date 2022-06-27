import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeText, changeTitle } from "./store/slice/postSlice";
import Title from "./components/Title";
import Text from "./components/Text";

function App() {
  const dispatch = useDispatch();
  const { title, text } = useSelector((state) => state.post.data1);

  const handleTitle = (e) => {
    dispatch(changeTitle(e.target.value));
  };

  const handleText = (e) => {
    dispatch(changeText(e.target.value));
  };

  return (
    <div className="App">
      <section>
        <label>
          title<input onChange={handleTitle}></input>
        </label>
        <label>
          text<input onChange={handleText}></input>
        </label>
        <Title title={title}></Title>
        <Text text={text}></Text>
      </section>
    </div>
  );
}

export default App;

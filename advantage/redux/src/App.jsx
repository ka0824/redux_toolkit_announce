import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeText, changeTitle } from "./store/actions/postAction";
import Title from "./components/Title";
import Text from "./components/Text";
import { immerChangeTitle, immerChangeText } from "./store/actions/immerAction";
import ImmerText from "./components/ImmerText";
import ImmerTitle from "./components/ImmerTitle";

function App() {
  const dispatch = useDispatch();
  const { title, text } = useSelector((state) => state.postData.data1);
  const { immerTitle, immerText } = useSelector(
    (state) => state.immerData.data1
  );

  const handleTitle = (e) => {
    dispatch(changeTitle(e.target.value));
  };

  const handleText = (e) => {
    dispatch(changeText(e.target.value));
  };

  const handleImmerTitle = (e) => {
    dispatch(immerChangeTitle(e.target.value));
  };

  const handleImmerText = (e) => {
    dispatch(immerChangeText(e.target.value));
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
      <section>
        <label>
          title<input onChange={handleImmerTitle}></input>
        </label>
        <label>
          text<input onChange={handleImmerText}></input>
        </label>
        <ImmerTitle title={immerTitle}></ImmerTitle>
        <ImmerText text={immerText}></ImmerText>
      </section>
    </div>
  );
}

export default App;

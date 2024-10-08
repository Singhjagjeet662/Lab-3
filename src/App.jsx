import "./App.css";
import ColorBox from "./Components/ColorBox";
import ColorBoxContainer from "./Components/ColorBoxContainer";
import colors from "./data/data";

function App() {
  return (
    <>
      <h1>jagjeet singh</h1>

      <ColorBoxContainer colors={colors} />
    </>
  );
}

export default App;

import "./App.css";
import ResortContainer from "./components/ResortContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <h1>Resort lite</h1>
      <ResortContainer data={data} />
    </>
  );
}

export default App;

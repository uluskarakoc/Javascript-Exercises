
import "./App.css";
import Aufgaben from "./components/Header"; 
import Students from "./components/Students"
function App() {
  return (
    <div className="App">
      <h1>Students</h1>
      <Aufgaben mainText= "Hallo Ulus"  subText="Ulus Karakoc"/>
      <Students/>
    </div>
  );
}
export default App;

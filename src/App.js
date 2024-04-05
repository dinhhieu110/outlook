import { LeftBar } from "./components/leftbar/LeftBar";
import { NavBar } from "./components/navbar/NavBar";
import { RightParts } from "./components/rightParts/RightParts";
import "./App.scss"
function App() {
  return (
    <div className="App">
     <div className="wrapper">
     <NavBar/>
     <div className="container">
      <LeftBar/>
      <RightParts/>
     </div>
     </div>
    </div>
  );
}

export default App;


import File1 from "./Components/File1";
import{Routes,Route}from"react-router-dom"
import Viewmore from"./Components/Viewmore"
import View from "./Components/View";
function App() {
  return (
    <div className="App">
      <File1/>
      <Routes>
        <Route path="/view" element={<Viewmore/>}/>
        <Route path="/view2" element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;

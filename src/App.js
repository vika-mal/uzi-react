import "./App.scss";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

function App() {
  return (
    <div className='wrapper'>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;

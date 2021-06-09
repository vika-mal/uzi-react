import "./App.scss";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Sidebar />
        <Switch>
          <Content />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

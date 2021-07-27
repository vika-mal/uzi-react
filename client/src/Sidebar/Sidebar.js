import "./Sidebar.scss";
import List from "./List/List";
import { dataList } from "../Data/Data";
import { Link } from "react-router-dom";

function Sidebar() {
  const listItems = Array.from(dataList);
  // console.log(listItems);
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">
        <Link to="/">АТЛАС УЛЬТРАЗВУКОВОЙ ДИАГНОСТИКИ</Link>
      </h1>
      <List listItems={listItems} />
    </div>
  );
}

export default Sidebar;

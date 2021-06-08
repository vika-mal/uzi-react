import "./Sidebar.scss";
import List from "./List/List";
import { dataList } from "../Data/Data";

function Sidebar() {
  const listItems = Array.from(dataList);
  // console.log(listItems);
  return (
    <div className="sidebar">
      <h1 className='sidebar__title'><a href='/'>АТЛАС УЛЬТРАЗВУКОВОЙ ДИАГНОСТИКИ</a></h1>
      <List listItems={listItems} />
    </div>
  );
}

export default Sidebar;

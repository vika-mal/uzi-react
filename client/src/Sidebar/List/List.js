import "./List.scss";
import { Link } from "react-router-dom";

function List(props) {
  const listItems = props.listItems;

  const listItem = listItems.map((elem) => {
    return (
      <li className="sidebar__nav-item" key={elem.id}>
        <Link to={elem.path} className="sidebar__nav-link" >{elem.title}</Link>
      </li>
    );
  });
  return (
    <>
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">{listItem}</ul>
      </nav>
    </>
  );
}

export default List;

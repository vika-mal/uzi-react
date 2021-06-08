import "./List.scss";

function List(props) {
  const listItems = props.listItems;

  const listItem = listItems.map((elem) => {
    return (
      <li className="sidebar__nav-item" key={elem.id}>
        <a className="sidebar__nav-link" href="/">{elem.title}</a>
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

import "../../Content/Content.scss";
import { pancreasDB } from "./PancreasDB";

function Pancreas() {
  const pancreasData = Array.from(pancreasDB);

  const pancreasItem = pancreasData.map((elem) => {
    return (
      <div className='content__item'>
        <img className='content__img' src={elem.src} alt={elem.title} />
        <h2 className='content__title'>{elem.title}</h2>
      </div>
    );
  });
  return <div className='content__wrap'>{pancreasItem}</div>;
}

export default Pancreas;

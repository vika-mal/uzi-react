import "../../Content/Content.scss";
import { heparDB } from "./HeparDB";


function Hepar() {
  const heparData = Array.from(heparDB);

  const heparItem = heparData.map((elem) => {
    return (
      <div className='content__item'>
        <img className='content__img' src={elem.src} alt={elem.title} />
        <h2 className='content__title'>{elem.title}</h2>
      </div>
    );
  });
  return <div className='content__wrap'>{heparItem}</div>;
}

export default Hepar;

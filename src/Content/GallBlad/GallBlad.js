import "../../Content/Content.scss";
import { gallBladDB } from "./GallBladDB";

function GallBlad() {
  const gallBladData = Array.from(gallBladDB);

  const gallBladItem = gallBladData.map((elem) => {
    return (
      <div className='content__item'>
        <img className='content__img' src={elem.src} alt={elem.title} />
        <h2 className='content__title'>{elem.title}</h2>
      </div>
    );
  });
  return <div className='content__wrap'>{gallBladItem}</div>;
}

export default GallBlad;
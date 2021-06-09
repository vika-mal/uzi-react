import "../../Content/Content.scss";
import { gynDB } from "./GynDB";

function Gyn() {
  const gynData = Array.from(gynDB);

  const gynItem = gynData.map((elem) => {
    return (
      <div className='content__item'>
        <img className='content__img' src={elem.src} alt={elem.title} />
        <h2 className='content__title'>{elem.title}</h2>
      </div>
    );
  });
  return <div className='content__wrap'>{gynItem}</div>;
}

export default Gyn;
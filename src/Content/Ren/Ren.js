import "../../Content/Content.scss";
import { renDB } from "./RenDB";

function Ren() {
  const renData = Array.from(renDB);

  const renItem = renData.map((elem) => {
    return (
      <div className='content__item'>
        <img className='content__img' src={elem.src} alt={elem.title} />
        <h2 className='content__title'>{elem.title}</h2>
      </div>
    );
  });
  return <div className='content__wrap'>{renItem}</div>;
}
export default Ren;

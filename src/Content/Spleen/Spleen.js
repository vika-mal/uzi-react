import "../../Content/Content.scss";
import { spleenDB } from "./SpleenDB";

function Spleen() {
  const spleenData = Array.from(spleenDB);

  const spleenItem = spleenData.map((elem) => {
    return (
      <div className='content__item'>
        <img className='content__img' src={elem.src} alt={elem.title} />
        <h2 className='content__title'>{elem.title}</h2>
      </div>
    );
  });
  return <div className='content__wrap'>{spleenItem}</div>;
}
export default Spleen;

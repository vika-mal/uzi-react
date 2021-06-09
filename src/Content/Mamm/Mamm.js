import "../../Content/Content.scss";
import { mammDB } from "./MammDB";

function Mamm() {
  const mammData = Array.from(mammDB);

  const mammItem = mammData.map((elem) => {
    return (
      <div className='content__item'>
        <img className='content__img' src={elem.src} alt={elem.title} />
        <h2 className='content__title'>{elem.title}</h2>
      </div>
    );
  });
  return <div className='content__wrap'>{mammItem}</div>;
}

export default Mamm;

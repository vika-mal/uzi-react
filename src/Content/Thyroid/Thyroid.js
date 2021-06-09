import "../../Content/Content.scss";
import { thyroidDB } from "./ThyroidDB";

function Thyroid() {
  const thyroidData = Array.from(thyroidDB);

  const thyroidItem = thyroidData.map((elem) => {
    return (
      <div className='content__item'>
        <img className='content__img' src={elem.src} alt={elem.title} />
        <h2 className='content__title'>{elem.title}</h2>
      </div>
    );
  });
  return <div className='content__wrap'>{thyroidItem}</div>;
}

export default Thyroid;

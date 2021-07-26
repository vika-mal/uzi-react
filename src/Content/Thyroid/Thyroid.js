import "../../Content/Content.scss";
import { thyroidDB } from "./ThyroidDB";
import { useState } from 'react';

function Thyroid() {
  const thyroidData = Array.from(thyroidDB);
  const [modalActive, setModalActive] = useState(null);

  const thyroidItem = thyroidData.map((elem, index) => {
    return (
      <div key={index} className="content__item">
        <div className='content__item-wrapper'>
          <img className="content__img" src={elem.src} alt={elem.title} onClick={() => { setModalActive(index) }} />
          <h2 className="content__title" >{elem.title}</h2>
        </div>
        <div className={modalActive === index ? 'modal active' : 'modal'} onClick={() => { setModalActive(null) }}>
          <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <header className='modal__content-header'>
              <h1 className='modal__content-title'>{elem.title}</h1>
              <div className='modal__btn-close' onClick={() => { setModalActive(null) }}>X</div>
            </header>
            <img className='modal__content-img' src={elem.src} alt="im" />
            <p>{elem.text}</p></div>
        </div>
      </div>
    );
  });

  return (
    <div className="content__wrap">
      {thyroidItem}
    </div>)
}

export default Thyroid;

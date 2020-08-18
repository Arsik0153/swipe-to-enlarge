import React from 'react'

const Spec = () => {
  return (
    <div className="spec">
      <div className="spec-inner">
        <div className="spec-header">
          <h5>
            SuperPower PC <br /> характеристики
          </h5>
        </div>
        <ul>
          <li>
            <div className="spec-label">Контроллер</div>
            <div className="spec-content red">FE310-228</div>
          </li>
          <li>
            <div className="spec-label">Вольтность</div>
            <div className="spec-content">3 V</div>
          </li>
          <li>
            <div className="spec-label">Пины</div>
            <div className="spec-content">19</div>
          </li>
          <li>
            <div className="spec-label">Еще пины</div>
            <div className="spec-content">9</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Spec

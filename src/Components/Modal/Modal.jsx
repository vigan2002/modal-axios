import React from 'react';
import "./style.scss";

const Modal = (props) => {
    const {
        color, description, image, make_id,
        model, price, state, year, closeModal
    } = props

  return (
    <div className="modal">
        <div className="content-modal">
            <button className="close" onClick={() => closeModal()}>X</button>
            <img src={image} alt='' />
            <h2>Model: {model}</h2>
            <h2>Make_id: {make_id}</h2>
            <h2>color: {color}</h2>
            <h2>Description: {description}</h2>
            <h2>State: {state}</h2>
            <h2>Year: {year}</h2>
            <h2>Price: {price}</h2>
        </div>
    </div>
  )
}

export default Modal;

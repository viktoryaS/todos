import React from "react";

import './item-add-form.css';

const ItemAddFrom = ({onItemAdded}) => {
    return (
        <div className="item-add-form">
            <button 
            className="btn btn-outline-secondary"
            onClick={() => onItemAdded('hello')}
            >Add Item</button>
        </div>
    )
}
export default ItemAddFrom;
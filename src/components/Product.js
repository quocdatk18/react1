import React from 'react';


export default function Product(props) {
    const { img, name, description, price } = props.item;


    return (
        <div className="col col-md-4">
            <div className="card mt-4">
                <img src={img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Description: {description}</p>
                    <p className="card-text">Price: {price}</p>
                </div>
            </div>
        </div>
    )
}

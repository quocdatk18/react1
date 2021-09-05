import React, { Fragment } from 'react';

export default function Contact(props) {
    const getInputValue = (selector) => {
        const element = document.querySelector(selector);
        return element.value;
    }
    const addProduct = () => {
        const name = getInputValue("#name");
        const description = getInputValue("#description");
        const price = getInputValue("#price");
        const product = {
            name,
            description,
            price,
        }
        props.parentCallback(product);
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <input className="form-control" id="description" />
                </div>
                <div className="form-group">
                    <label for="price">Price</label>
                    <input className="form-control" id="price" />
                </div>
                <button
                    onClick={() => {
                        addProduct()
                    }}
                    type="button"
                    className="btn btn-primary">
                    Add product
                </button>
            </form>
        </div>
    )
}

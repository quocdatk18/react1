import React from 'react';
import { Form, FormControl } from 'bootstrap-4-react'

export default function Search(props) {
    const styleInput = {
        position: 'relative',
        width: '100%'
    }
    const sendKeyword = e => props.parentCallback(e.target.value);
    return (
        <div>
            <div className={styleInput}>
                <input
                    className='form-control '
                    type="search"
                    placeholder="Enter your product"
                    aria-label="Search"
                    onChange={sendKeyword}
                />
            </div>
        </div>
    )
}

import React, {Component} from 'react';

export default class Buttons extends Component {
    state = {
        All: true,
        Active: false,
        Done: false
    };

    doActive = () => {
        console.log(this);
    };

    render() {
        return (
            <div className='btn-group'>
                <button className='btn btn-outline-secondary active' type='button'>All</button>
                <button className='btn btn-outline-secondary' type='button'>Active</button>
                <button className='btn btn-outline-secondary' type='button'>Done</button>
            </div>
        )
    }
}


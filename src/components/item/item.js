import React, {Component} from 'react';
import ItemBtn from "../item-btn";

import './item.css';

export default class Item extends Component {
    render() {
        const {label} = this.props;
        const {important} = this.props;
        const {done} = this.props;
        let className = 'todo-txt';

        if (done) {
            className += ' todo-item-done';
        }
        if (important) {
            className += ' todo-item-important';
        }
        return (
            <div className='todo-item'>
            <span className={className} onClick={this.props.onDone}>
                {label}
                </span>
                <ItemBtn onDeleted={this.props.onDeleted} onImportant={this.props.onImportant} id={this.props.id}/>
            </div>
        );
    }
};


import React, {Component} from 'react';
import Buttons from '../buttons';

import './filter.css';

class Filter extends Component {
    state = {
        text: ''
    };
    changeText = (e) => {
        this.setState({text: e.target.value});
        this.props.updateSearchTxt(e.target.value)
    };

    render() {
        return (
            <div className='row todo-row'>
                <input onChange={this.changeText} className='form-control col mr-1'
                       placeholder='Search' value={this.state.text}/>
                <Buttons className='col'/>
            </div>
        )
    }

}

export default Filter;
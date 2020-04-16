import React, {Component} from 'react';

import Filter from '../filter';
import Header from '../header';
import List from '../list';

import './app.css';
import Add from "../add";


export default class App extends Component {
    state = {
        data: [
            {label: 'CSS', id: 1, done: true},
            {label: 'HTML', id: 2, done: true},
            {label: 'JavaScript', id: 3, important: true, done: true},
            {label: 'In process React', id: 4, important: true}
        ],
        searchText: ''
    };
    uniqKey = 5;
    deleteItem = (id) => {
        this.setState((state) => {
            const index = state.data.findIndex(e => e.id === id);

            return {
                data:
                    [...state.data.slice(0, index),
                        ...state.data.slice(index + 1)
                    ]
            }
        })
    };
    addItem = (txt) => {
        const currentData = [...this.state.data];
        const obj = {label: txt, id: this.uniqKey++};
        currentData.push(obj);

        this.setState((state) => {
            return {data: currentData};
        })
    };
    doImportant = (id) => {
        this.setState((state) => {
            const currentData = [...this.state.data];
            const index = state.data.findIndex(e => e.id === id);
            currentData[index].important = currentData[index].important ? !currentData[index].important
                : true;

            return {
                data:
                    [...state.data.slice(0, index),
                        currentData[index],
                        ...state.data.slice(index + 1)
                    ]
            }

        });


    };
    doDone = (id) => {
        this.setState((state) => {
            const currentData = [...this.state.data];
            const index = state.data.findIndex(e => e.id === id);
            currentData[index].done = currentData[index].done ? !currentData[index].done
                : true;

            return {
                data:
                    [...state.data.slice(0, index),
                        currentData[index],
                        ...state.data.slice(index + 1)
                    ]
            }

        });


    };
    updateSearchTxt = (txt) => {
        this.setState({searchText: txt})
    };
    filter = (items, txt) => {
        if (txt.length === 0) {
            return items;
        }
        return items.filter(item => item.label.toUpperCase().indexOf(txt.toUpperCase()) > -1);
    };

    render() {
        const {data, searchText} = this.state;
        const filtered = this.filter(data, searchText);
        return (
            <div className='todo-app'>
                <Header/>
                <Filter updateSearchTxt={this.updateSearchTxt}/>
                <List items={filtered} onDeleted={this.deleteItem} onDone={this.doDone}
                      onImportant={this.doImportant}/>
                <Add onAdded={this.addItem}/>
            </div>
        )
    }
}

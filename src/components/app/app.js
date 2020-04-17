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
            {label: 'HTML', id: 2, },
            {label: 'JavaScript', id: 3, important: true, done: true},
            {label: 'React', id: 4, important: true},
            {label: 'Babel', id: 7, important: true, done: true},
            {label: 'Git', id: 9},
            {label: 'Algorithms data structures', id: 10, important: true}
        ],
        searchText: '',
        activeFilter: 'all' // active, done
    };
    uniqKey = 1000;
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

        this.setState({data: currentData});
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
    filterSearch = (items, txt) => {
        if (txt.length === 0) {
            return items;
        }
        return items.filter(item => item.label.toUpperCase().indexOf(txt.toUpperCase()) > -1);
    };
    filterBtns = (items, status) => {
        if (status === 'all') {
            return items;
        } else if (status === 'active') {
            return items.filter(item => !item.done);
        } else if (status === 'done') {
            return items.filter(item => item.done);
        } else {
            return items;
        }
    };
    onActive = (activeBtn) => {
        this.setState({activeFilter: activeBtn});
    };

    render() {
        const {data, searchText, activeFilter} = this.state;
        const filtered = this.filterSearch(this.filterBtns(data, activeFilter), searchText);

        return (
            <div className='todo-app'>
                <Header/>
                <Filter updateSearchTxt={this.updateSearchTxt} onActive={this.onActive} filterStatus={this.state.activeFilter}/>
                <List items={filtered} onDeleted={this.deleteItem} onDone={this.doDone}
                      onImportant={this.doImportant}/>
                <Add onAdded={this.addItem}/>
            </div>
        )
    }
}

import React from 'react';

const Buttons = (props) => {
    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];
    const buttonsHtml = buttons.map(({name, label}) => {
        const isActive = props.filterStatus === name;
        const clazz = 'btn ' + (isActive ? 'btn-secondary' : 'btn-outline-secondary');
        return (
            <button type='button' className={clazz}
                    onClick={() => props.onActive(name)} key={name}>
                {label}</button>
        )
    });

    return (
        <div className='btn-group'>
            {buttonsHtml}
        </div>
    );
};

export default Buttons;


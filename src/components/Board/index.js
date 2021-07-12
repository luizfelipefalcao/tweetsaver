import React from 'react';

const Board = (props) => {

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'flex';

        //Uploading id's on localStorage
        var existing = localStorage.getItem('List');
        existing = existing ? existing.split(',') : [];
        existing.push(JSON.stringify(card_id));
        localStorage.setItem('List', existing);

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        //Droppable content
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    );
}

export default Board;
import React from 'react';
import './style.css';

const TweetSource = (props) => {

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = 'none'
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        //Draggable content
        <div
            id={props.id}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            className='tweet-source-card'
        >
            <div className='tweet-source-avatar'>
                <img
                    style={{ width: 50, height: 50, borderRadius: '50%' }}
                    src={props.avatar_url}
                />
            </div>
            <div className='tweet-source-description'>
                <div className='tweet-source-name'>{props.login}</div>
                <div className='tweet-source-description'>{props.html_url}</div>
            </div>
            <div className='tweet-source-date'>
            </div>
        </div>
    )
}

export default TweetSource;
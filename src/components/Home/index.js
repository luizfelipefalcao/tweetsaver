import React from 'react';
import './home.css';

import { BsArrowRight } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { IoPersonCircleOutline } from 'react-icons/io5';

import Header from '../Header';

export default function Home() {
    return (
        <div className='content'>
            <Header />
            <main>
                <div className='tweet-source'>
                    <div className='tweet-source-searcher'>
                        <input type='text' placeholder='Search Twiter' />
                        <i><BiSearch size='1.8em' /></i>
                    </div>
                    <div className='tweet-source-content'>
                        <TweetSource />
                        <TweetSource />
                        <TweetSource />
                    </div>
                </div>
                <div className='tweet-drag'>
                    <BsArrowRight size='2em' />
                    <span>Drag tweets to save</span>
                </div>
                <div className='tweet-draged'>
                    <div className='tweet-draged-title'>Saved Tweets</div>
                    <div className='tweet-draged-content'>
                        <TweetSource />
                    </div>
                </div>
            </main>
        </div>
    );
}

const TweetSource = ({ source }) => {
    return (
        <div className='tweet-source-data'>
            <div className='tweet-source-avatar'>
                <i><IoPersonCircleOutline size='2.5em' /></i>
            </div>
            <div className='tweet-source-description'>
                <div className='tweet-source-name'>
                    <div className='tweet-source-fullname'>Full Name</div>
                    <div className='tweet-source-account'>@tweethanlde</div>
                </div>
                <div className='tweet-source-description'>This is a tweetanguage executes at runtime many of the things that a static language does at compile time. 't worry if those things</div>
            </div>
            <div className='tweet-source-date'>
                <span>7/15/2021</span>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import './style.css';

import { BsArrowRight } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

import TweetSource from '../TweetSource';
import Board from '../Board';

export default function Home() {

    const [tweets, setTweets] = useState([]);
    const [filteredTweets, setFilteredTweets] = useState([]);
    const [search, setSearch] = useState('');
    const [searchList, setSearchList] = useState('');
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState([]);

    const fetchData = async () => {
        await fetch(`https://api.github.com/users`)
            .then((res) => res.json())
            .then((json) => setTweets(json))
            .then(setLoading(false));
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    const handleSearch = () => {
        setSearchList(search);
        setFilteredTweets(tweets.filter((item) =>
            item.login.toLowerCase().includes(searchList.toLowerCase())
        ));
    }

    useEffect(() => {
        handleSearch();
    }, [searchList]);

    if (loading) {
        return <p className='tweet-source-loading'>Loading...</p>;
    }

    return (
        <>
            <div className='content'>
                <main>
                    <div className='tweet-source'>
                        <div className='tweet-source-searcher'>
                            <input
                                type='text'
                                placeholder='Search Twiter'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <i onClick={handleSearch}><BiSearch size='1.8em' /></i>
                        </div>
                        {loading === '' ? (
                            <div className='tweet-source-loading'>Loading...</div>
                        ) : (
                            <Board id='board-1' className='tweet-source-content'>
                                {
                                    filteredTweets.map((list) => (
                                        <TweetSource id={list.id} key={list.id} {...list} draggable='true' />
                                    ))
                                }
                            </Board>
                        )}
                    </div>
                    <div className='tweet-dragger'>
                        <BsArrowRight size='2em' />
                        <span>Drag tweets to save</span>
                    </div>
                    <div className='tweet-draged'>
                        <div className='tweet-draged-title'>Saved Tweets</div>
                        <Board id='board-2' className='tweet-source-content' />
                    </div>
                </main>
            </div>
        </>
    );
}


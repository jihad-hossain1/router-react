import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend/Friend';

const Friends = () => {

    const friends = useLoaderData();
    // console.log(friends);

    return (
        <div>
            <h2 className='bg-blue-300 p-2 rounded inline-block'>friends list: <span className='btn bg-white rounded p-1'>{friends.length}</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;
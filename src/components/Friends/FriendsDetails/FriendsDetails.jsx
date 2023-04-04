import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friend = useLoaderData();
    const {website,username} = friend

    return (
        <div className='bg-blue-100 rounded inline-block p-2 mx-auto'>
            <h2 className='font-semibold'>website: {website}</h2>
            <p>UserName: {username}</p>

        </div>
    );
};

export default FriendsDetails;
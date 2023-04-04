import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({postLoad}) => {
    // console.log(postLoad);
    const { body, id, title, userId } = postLoad;



    return (
        <div className='bg-blue-100 rounded p-2 m-1'>
            <h2 className='font-semibold'>{userId}</h2>
            <h3 className='font-semibold text-xl'>{title}</h3>
            <p>Discription: {body}</p>
            <Link to={`/post/${id}`} className='text-blue-600 shadow py-1 px-2 rounded-md mr-2'><small>Show Details</small></Link>
            <button className='hover:underline'><small>Show Post Details</small></button>
        </div>
    );
};

export default SinglePost;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const postDetail = useLoaderData();
    console.log(postDetail);
    return (
        <div className='bg-yellow-50 p-3 rounded-lg shadow mx-3'>
            <h4>{postDetail.id}</h4>
            <p>{postDetail.body}</p>
        </div>
    );
};

export default PostDetails;
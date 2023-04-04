import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetail = useLoaderData();
    // console.log(postDetail);
    const navigate = useNavigate();
        const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <div className='bg-yellow-50 p-3 rounded-lg shadow mx-3'>
            <h4>{postDetail.id}</h4>
            <p>{postDetail.body}</p>
            <button onClick={handleNavigate}><small className='hover:underline bg-yellow-200 py-1 px-2 shadow rounded-md'>Go Back</small></button>
        </div>
    );
};

export default PostDetails;
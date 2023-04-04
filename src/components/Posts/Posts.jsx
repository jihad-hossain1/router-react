import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from './SinglePost/SinglePost';

const Posts = () => {
    const postLoads = useLoaderData()
    console.log(postLoads);
    return (
        <div className='mx-2'>
            <h3 className='bg-blue-200 rounded p-2 inline-block'>Posts : <span className='bg-white rounded-md p-1'>{postLoads.length}</span></h3>
            <div className='mx-9'>
                {
                    postLoads.map(postLoad => <SinglePost postLoad={postLoad} key={postLoad.id}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Posts;
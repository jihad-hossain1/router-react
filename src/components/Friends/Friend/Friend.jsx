import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, phone,username,email,adress, company, id} = props.friend
    // console.log(props.friend);

    return (
        <div className='bg-blue-200 text-center p-2 rounded-md m-2'>
            <h3 className='font-semibold'>{name}</h3>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            <p className='text-blue-600'><Link to={`/friend/${id}`}>show me details</Link></p>
        </div>
    );
};

export default Friend;
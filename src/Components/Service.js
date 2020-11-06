import React from 'react';

const Service = (props) => {
    const{name, username, email} = props.sf;
    return (
        <div style={{width: '30%', float: 'left'}}>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    );
};

export default Service;
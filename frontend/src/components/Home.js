import React from 'react';
import {Link} from 'react-router-dom';

const home=() => (
    <div className='container '>
        <div className="jumbotron mt-5">
            <h1 className="display-4 mt-0 ">Welcome To Blog World! </h1>
            <p className="lead">This is a blog app and we treat various blogs on different topics</p>
            <hr className="my-4" />
            <p><em>Snap on the button below to read the full blog.</em></p>
            <Link className="btn btn-primary btn-lg " to='/blog' role="button">Read More..</Link>
        </div>
    </div>
);

export default home;
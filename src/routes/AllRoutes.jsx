import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;
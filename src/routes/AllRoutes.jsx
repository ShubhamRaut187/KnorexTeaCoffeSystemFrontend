import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import AdminDashboard from '../pages/AdminDashboard';
function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/admin' element={<AdminDashboard/>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;
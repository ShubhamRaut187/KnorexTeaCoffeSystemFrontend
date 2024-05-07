import React from 'react';
import './AdminDashboard.css';
import AdminCreateUser from '../components/AdminCreateUser';
import AdminMenu from '../components/AdminMenu';
function AdminDashboard(props) {
    return (
        <div className='admin-dashboard-main'>
            <div className='admin-dashboard-buttons'>
                <button><i className="fa-solid fa-right-from-bracket fa-lg"></i>&nbsp;Logout</button>
                <button><i className="fa-solid fa-sun fa-lg" ></i>&nbsp;Open Morning Session</button>
                <button><i className="fa-solid fa-moon fa-lg"></i>&nbsp;Close Evening Session</button>
            </div>
            <div className='admin-operations-main'>
                <AdminCreateUser/>
                <AdminMenu/>
            </div>
        </div>
    );
}

export default AdminDashboard;
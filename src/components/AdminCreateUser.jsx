import React from 'react';
import './AdminCreateUser.css'
function AdminCreateUser(props) {
    return (
        <div className='admin-create-user-main'>
            <h2>Add User</h2>
            <form>
                <input type="text" placeholder='Enter User Name' className='admin-input-field'/>
                <input type="submit" value={'Add User'} className='admin-submit-button'/>
            </form>
        </div>
    );
}

export default AdminCreateUser;
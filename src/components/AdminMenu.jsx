import React from 'react';
import './AdminMenu.css'
function AdminMenu(props) {
    return (
        <div className='admin-create-menu-main'>
            <h2>Add Menu</h2>
            <form>
                <input type="text" placeholder='Breakfast Menu 1' className='admin-input-field'/>
                <input type="text" placeholder='Breakfast Menu 2' className='admin-input-field'/>
                <input type="text" placeholder='Breakfast Menu 3' className='admin-input-field'/>
                <input type="submit" value={'Post Menu'} className='admin-submit-button'/>
            </form>
        </div>
    );
}

export default AdminMenu;
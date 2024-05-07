import React from 'react';
import './Usercard.css'
import Avatar from '@mui/material/Avatar';
function Usercard(props) {
    return (
        <div className='user-card-main'>
            <div className='user-avatar-container'>
                <Avatar sx={{
                    bgcolor:'#e96851',
                    width:'50px',
                    height:'50px'
                }}>SS</Avatar>
            </div>
            <div className='user-info'>
                <h2><i className="fa-solid fa-user fa-shake fa-lg" style={{color: '#e96851'}}></i>&nbsp;<span className='user-first-name'>Sushant</span> <span className='user-last-name'>Salavi</span></h2>
            </div>
            <div className='user-buttons'>
                <select name="" id="">
                    <option value="tea">Tea</option>
                    <option value="tea without sugar">Tea Without Sugar</option>
                </select>
                <select name="" id="">
                    <option value="coffee">Coffee</option>
                    <option value="coffee without sugar">Coffee Without Sugar</option>
                    <option value="black coffee">Black Coffee</option>
                </select>
                <select>
                    <option value="">Breakfast</option>
                    <option value="">Idli Sambar</option>
                    <option value="">Wada Sambar</option>
                </select>
            </div>
            <div className='user-lunch-section'>
               <select name="" id="">
                    <option value="">Select Lunch</option>
                    <option value="thali">Thali</option>
                    <option value="rice plate">Rice Plate</option>
               </select>
              <input type='text' placeholder='Note'/>
            </div>
            <div className='place-order-container'>
            <button><i className="fa-solid fa-check fa-lg" style={{color:'white'}}></i>&nbsp;Place Order</button>
            </div>
        </div>
    );
}

export default Usercard;
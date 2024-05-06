import React from 'react';
import './OrderSummary.css';
function OrderSummary(props) {
    return (
        <div className='order-summary-main'>
            <div className='order-card'>
                <div className='order-card-head'>
                    <h3>Tea</h3>
                </div>
                <div className='order-card-count'>
                    <h1>01</h1>
                </div>
            </div>
            <div className='order-card'>
                <div className='order-card-head'>
                    <h3>Tea without sugar</h3>
                </div>
                <div className='order-card-count'>
                    <h1>01</h1>
                </div>
            </div> <div className='order-card'>
                <div className='order-card-head'>
                    <h3>Coffee</h3>
                </div>
                <div className='order-card-count'>
                    <h1>23</h1>
                </div>
            </div> <div className='order-card'>
                <div className='order-card-head'>
                    <h3>Coffee without sugar</h3>
                </div>
                <div className='order-card-count'>
                    <h1>23</h1>
                </div>
            </div> <div className='order-card'>
                <div className='order-card-head'>
                    <h3>Black coffee</h3>
                </div>
                <div className='order-card-count'>
                    <h1>01</h1>
                </div>
            </div> 
        </div>
    );
}

export default OrderSummary;
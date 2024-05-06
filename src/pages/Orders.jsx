import React from 'react';
import OrderSummary from '../components/OrderSummary';
import OrderTable from '../components/OrderTable';
function Orders(props) {
    return (
        <div>
            <OrderSummary/>
            <OrderTable/>
        </div>
    );
}

export default Orders;
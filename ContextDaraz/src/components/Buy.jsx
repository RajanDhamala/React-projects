import React, { useContext } from 'react';
import CardContext from '../Context/CardContext';

function Buy() {
  const { orderPlaced } = useContext(CardContext);

  return (
    <>
      <div className=''>
        <h1 className='text-wrap text-2xl text-center font-semibold'>{orderPlaced =='' ?'no ordered placed':`${orderPlaced} order placed of laptop and keyboard total price is ${orderPlaced *885}`}</h1>
      </div>
    </>
  );
}

export default Buy;

import React, { useContext } from 'react';
import CardContext from '../Context/CardContext';

function Buy() {
  const { orderplaced } = useContext(CardContext);

  return (
    <>
      <div className=''>
        <h1 className='text-2xl text-center font-semibold'>{orderplaced =='' ?'no ordered placed':`${orderplaced} order placed of laptop and keyboard total price is ${orderplaced *885}`}</h1>
      </div>
    </>
  );
}

export default Buy;

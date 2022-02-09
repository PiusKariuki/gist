import React from 'react';
import Hero from './Hero';
import Products from './Products';
import Rooms from './Rooms';
import Shops from './Shops';

const Preview = () => {
	return (
		<>
			<Hero />
			<Shops />
			<Products />
         <Rooms />
		</>
	);
};

export default Preview;
import React from 'react';
import Hero from './Hero';
import Products from './products/HomeProducts';
import Rooms from './rooms/Rooms';
import Shops from './shops/PopularShops';

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
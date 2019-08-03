import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const App = () => (
	<div>
		<h1>Все мои задачи:</h1>
		<InputItem />
		<ItemList />
		<Footer />
	</div>);

export default App;
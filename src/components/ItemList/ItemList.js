import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickItem, onClickDone, onClickDelete }) => (
	<ul className={styles.itemlist}>
	{items.map(item =><li className={styles.item} key={item.id}> 
		<Item 
			value={item.value}
			isClicked={item.isClicked}
			isDone={item.isDone}
			id={item.id}
			onClickItem={onClickItem}
			onClickDone ={onClickDone}
			onClickDelete={onClickDelete}
		/> 
		</li>)}
	</ul>);

ItemList.defaultProps = {
	items: [
		{
			value: "Несуществующая задача"
		}]
};

ItemList.propTypes = {
	items: PropTypes.array.isRequired,
	onClickItem: PropTypes.func,
	onClickDone: PropTypes.func,
	onClickDelete: PropTypes.func
};



export default ItemList;
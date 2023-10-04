import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
	const sortOrders = [
		{ value: '', label: 'Relevance' },
		{ value: '-added', label: 'Data added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release date' },
		{ value: '-raiting', label: 'Average rating' },
	];

	const setSortOrder = useGameQueryStore((s) => s.setSortOrver);
	const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
	const currentSordOrder = sortOrders.find(
		(order) => order.value === sortOrder
	);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {currentSordOrder?.label || 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => setSortOrder(order.value)}
						key={order.value}
						value={order.value}>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;

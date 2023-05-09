import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2020, 5, 12),
	},
	{ id: 't1', title: 'New TV', amount: 100, date: new Date(2023, 9, 12) },
	{ id: 't2', title: 'New TV', amount: 100, date: new Date(2023, 9, 12) },
	{ id: 't3', title: 'New TV', amount: 100, date: new Date(2023, 9, 12) },
	{ id: 't4', title: 'New TV', amount: 100, date: new Date(2023, 9, 12) },
	{ id: 't5', title: 'New TV', amount: 100, date: new Date(2023, 7, 12) },
	{ id: 't6', title: 'New TV', amount: 100, date: new Date(2023, 7, 12) },
	{ id: 't7', title: 'New TV', amount: 100, date: new Date(2023, 7, 12) },
	{ id: 't8', title: 'New TV', amount: 100, date: new Date(2023, 6, 12) },
	{ id: 't9', title: 'New TV', amount: 100, date: new Date(2023, 6, 12) },
	{ id: 't10', title: 'New TV', amount: 100, date: new Date(2023, 5, 12) },
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
};

export default App;

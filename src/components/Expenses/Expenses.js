import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import styles from './Expenses.module.css';

const Expenses = (props) => {
	const [filteredYear, setFilterYear] = useState('2020');

	const filteredExpenses = props.expenses.filter(
		(expense) =>
			filteredYear === 'all' ||
			expense.date.getFullYear().toString() === filteredYear
	);

	const filterChangeHandler = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	return (
		<Card className={styles.expenses}>
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;

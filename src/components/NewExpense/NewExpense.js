import React, { useState } from 'react';
import ExpenseFrom from './ExpenseForm';

import styles from './NewExpense.module.css';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(), // TODO: needs upgrade
		};
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className={styles['new-expense']}>
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseFrom
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;

import React, { useState } from 'react';
import ExpenseFrom from './ExpenseForm';

import styles from './NewExpense.module.css';
import Button from '../UI/Button';

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
				<Button type="button" onClick={startEditingHandler}>
					Add New Expense
				</Button>
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

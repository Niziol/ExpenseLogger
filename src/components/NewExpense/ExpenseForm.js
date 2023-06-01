import React, { useRef } from 'react';

import styles from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
	const titleInputRef = useRef();
	const amountInputRef = useRef();
	const dateInputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredAmount = amountInputRef.current.value;
		const enteredDate = dateInputRef.current.value;

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={styles['new-expense__controls']}>
				<div className={styles['new-expense__control']}>
					<label>Title</label>
					<input type="text" ref={titleInputRef} />
				</div>
				<div className={styles['new-expense__control']}>
					<label>Amount</label>
					<input type="number" min="0.01" step="0.01" ref={amountInputRef} />
				</div>
				<div className={styles['new-expense__control']}>
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2023-12-31"
						ref={dateInputRef}
					/>
				</div>
			</div>
			<div className={styles['new-expense__actions']}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;

import React, { useState } from 'react';

import styles from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	});

	const titleChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				title: e.target.value,
			};
		});
	};

	const amountChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				amount: e.target.value,
			};
		});
	};

	const dateChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				date: e.target.value,
			};
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			...userInput,
			amount: +userInput.amount,
			date: new Date(userInput.date),
		};
		setUserInput({
			title: '',
			amount: '',
			date: '',
		});
		props.onSaveExpenseData(expenseData);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={styles['new-expense__controls']}>
				<div className={styles['new-expense__control']}>
					<label>Title</label>
					<input
						type="text"
						value={userInput.title}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className={styles['new-expense__control']}>
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={userInput.amount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className={styles['new-expense__control']}>
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2023-12-31"
						value={userInput.date}
						onChange={dateChangeHandler}
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

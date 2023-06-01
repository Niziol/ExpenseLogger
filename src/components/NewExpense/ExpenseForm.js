import React, { useRef, useState } from 'react';

import styles from './ExpenseForm.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const ExpenseForm = (props) => {
	const titleInputRef = useRef();
	const amountInputRef = useRef();
	const dateInputRef = useRef();

	const [errorInfo, setErrorInfo] = useState();

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredAmount = amountInputRef.current.value;
		const enteredDate = dateInputRef.current.value;

		if (
			enteredTitle.trim().length === 0 ||
			enteredAmount.trim().length === 0 ||
			enteredDate.trim().length === 0
		) {
			setErrorInfo({
				title: 'Invalid input',
				message:
					'Please enter a valid title, amout and date (must be non-empty values).',
			});
			return;
		}

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
	};

	const onConfirmHandler = () => {
		setErrorInfo();
	};

	return (
		<React.Fragment>
			{errorInfo && (
				<ErrorModal
					title={errorInfo.title}
					message={errorInfo.message}
					onConfirm={onConfirmHandler}
				/>
			)}

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
					<Button type="Button" onClick={props.onCancel}>
						Cancel
					</Button>
					<Button type="submit">Add Expense</Button>
				</div>
			</form>
		</React.Fragment>
	);
};

export default ExpenseForm;

import styles from './ExpenseDate.module.css';

const ExpenseDate = (props) => {
	const date = props.date;
	const year = date.toLocaleDateString('en-US', { year: 'numeric' });
	const month = date.toLocaleDateString('en-US', { month: 'long' });
	const day = date.toLocaleDateString('en-US', { day: 'numeric' });

	return (
		<div className={styles['expense-date']}>
			<div className={styles['expense-date__month']}>{month}</div>
			<div className={styles['expense-date__year']}>{year}</div>
			<div className={styles['expense-date__day']}>{day}</div>
		</div>
	);
};

export default ExpenseDate;

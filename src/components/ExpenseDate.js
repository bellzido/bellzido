import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});

    return(
        <div className="expense-date">
        <div className="expense_date_month">{month}</div>
        <div className="expense-date-year">{year}</div>
        <div className="expense-date-day">{day}</div>
        
    </div>
    )
}
export default ExpenseDate
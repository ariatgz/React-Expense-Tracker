
import './expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const expenses = props.expenses;

    let [year, setYear] = useState('2020');

    const yearChangeHandler = (year) => {
        setYear(year);


    };

    const filteredList = expenses.filter(x => x.date.getFullYear().toString() === year);




    return (
        <div>

            <Card className="expenses">
                <ExpensesChart expenses={filteredList} />
                <ExpenseFilter selected={year} onYearChanged={yearChangeHandler}/>
                <ExpensesList expensesList={filteredList} />
            </Card>
        </div>


    );

}

export default Expenses;
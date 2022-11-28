import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";



function ExpenseItem(props) {


    const [title,setTitle] = useState(props.title);

    const expensePrice= props.amount;



    return (
        <li>
        <Card className="expense-item">

            <ExpenseDate date={props.date} />

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${expensePrice}</div>
            </div>


        </Card>
        </li>

    );
}

export default ExpenseItem;




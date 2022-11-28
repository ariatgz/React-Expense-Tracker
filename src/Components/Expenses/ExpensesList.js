import ExpenseItem from "./ExpenseItem";
import React from "react";
import './ExpensesList.css';

function ExpensesList(props) {

    let filteredList=props.expensesList;







  if(filteredList.length === 0){
      return <p className="expenses-list__fallback">No expenses found</p>;
  }


    return (
        <ul className="expenses-list">
            {
                filteredList.map(x => {

                    return <ExpenseItem title={x.title} amount={x.amount} date={x.date} key={x.id}/>;
                })
            };
            }


        </ul>



    );

}

export default ExpensesList;
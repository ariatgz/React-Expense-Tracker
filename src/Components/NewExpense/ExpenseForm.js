
import React, {useState} from "react";
import './ExpenseForm.css'
function ExpenseForm(props) {

    let [enteredTitle,setEnteredTitle] = useState("");
    let [enteredAmount,setEnteredAmount] = useState("");
    let [enteredData,setEnteredData] = useState("");

    // let [input,setInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:''
    //
    // });

    const titleHandler = (event)=>{
        // setInput((prev)=>{
        //     return {
        //         ...prev,
        //         title: event.target.value
        //     }
        //
        //
        //
        // });

        setEnteredTitle(event.target.value);
    };

    const amountHandler = (event)=>{
        // setInput((prev)=>{
        //     return {
        //         ...prev,
        //         amount: event.target.value
        //     }
        //
        //
        //
        // });
        setEnteredAmount(event.target.value);
    };
    const dateHandler = (event)=>{
        // setInput((prev)=>{
        //     return {
        //         ...prev,
        //         date: event.target.value
        //     }
        //
        //
        //
        // });
        setEnteredData(event.target.value);
    };

    let [isCancel,setIscancel] = useState(true);

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredData)

        };

        props.onSaveExpenseData(expenseData);

        setIscancel(prev =>{
            return !isCancel;
        })
        setEnteredTitle('');
        setEnteredData('');
        setEnteredAmount('');



    };




    if(isCancel === true){
        return (
            <div className="new-expense__alone">
                <button onClick={cancelHandler}>Add Expense</button>
            </div>

        );

    }

    function cancelHandler(event) {
        setIscancel(prev =>{
            return !isCancel ;
        })



    }


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleHandler}  type="text"/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountHandler} type="number" min="0.01" step="0.01"/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={enteredData} onChange={dateHandler} type="date" min="2020-01-01" max="2022-12-31"/>
                </div>

            </div>


            <div className="new-expense__actions">
                <button type="button" onClick={cancelHandler} >Cancel</button>
                <button type="submit">Add Expense</button>


            </div>



        </form>


    );

}

export default ExpenseForm;
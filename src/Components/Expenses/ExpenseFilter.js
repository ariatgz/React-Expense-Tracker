import React from "react";
import './ExpenseFilter.css';


function  ExpenseFilter(props){


    const changeHandler = (event) =>{

        let year=event.target.value;

        props.onYearChanged(year);

    };



    return(
        <div className="expenses-filter" >
            <div className="expenses-filter__control">
            <label >Filter by year</label>
            <select value={props.selected} onChange={changeHandler} >
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>

            </select>
            </div>

        </div>

    );


}


export default ExpenseFilter;
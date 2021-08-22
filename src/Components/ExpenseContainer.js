import React from "react";
import '../App.css';
import Expense from './Expense'


const ExpenseContainer = ({expenses, expense, date, cost, handleExpenseInput, handleCostInput, handleDateInput, handleExpenseList, create_expense}) => {


        return(
            <div id="calc_container">
                <div>
                    <form onSubmit={create_expense}>
                        <input 
                        value={expense} 
                        type='text' 
                        onChange={handleExpenseInput} 
                        style={{color: "#C0C0C0"}} 
                        />

                        <input 
                        value={date} 
                        type='text' 
                        onChange={handleDateInput} 
                        style={{color: "#C0C0C0"}} 
                        />

                        <input  
                        value={cost} 
                        type='text' 
                        onChange={handleCostInput} 
                        style={{color: "#C0C0C0"}}
                        />
                        <button class="button">Add Expense</button>
                    </form>

                    <div id="expense_list">
                        <ul>
                            {
                                expenses.map(expense => {
                                    return(
                                        <Expense key={expense.id} handleExpenseList={handleExpenseList} expense_description={expense.expense_description}/>
                                    )
                                })
                            }
                        </ul>

                    </div>
                   

                </div>
               

            </div>

        );




}
export default ExpenseContainer;
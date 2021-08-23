import React from "react";
import '../App.css';
import Expense from './Expense'


const ExpenseContainer = ({expenses, expense, date, cost, handleExpenseInput, handleCostInput, handleDateInput, handleExpenseList, create_expense}) => {


        return(
            <div>
                <div id="form">
                   <form onSubmit={create_expense}>
                        <input 
                        placeholder="Expense"
                        value={expense} 
                        type='text' 
                        onChange={handleExpenseInput} 
                        style={{color: "#C0C0C0"}} 
                        />

                        <input 
                        placeholder="Date"
                        className="position1"
                        value={date} 
                        type='text' 
                        onChange={handleDateInput} 
                        style={{color: "#C0C0C0"}} 
                        />

                        <input 
                        placeholder="Cost" 
                        value={cost} 
                        type='text' 
                        onChange={handleCostInput} 
                        style={{color: "#C0C0C0"}}
                        />
                        <button class="button">Add Expense</button>
                    </form>
                    </div>
            
         
                        <ul>
                            {
                                expenses.map(expense => {
                                    return(
                                        <Expense key={expense.id} 
                                        handleExpenseList={handleExpenseList} 
                                        expense_description={expense.expense_description} 
                                        date={expense.date}
                                        cost={expense.cost}
                                        />
                                    )
                                })
                            }
                        </ul>

            </div>
    
                   

               

        );




}
export default ExpenseContainer;
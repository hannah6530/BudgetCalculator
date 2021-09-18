import React from "react";
import '../App.css';
import Expense from './Expense'


const ExpenseContainer = ({expenses, expense, date, cost, handleExpenseInput, handleCostInput, handleDateInput, handleExpenseList, create_expense}) => {


        return(
            <div>
                <div id="form">
                    <form className="income-form" onSubmit={create_expense}>
                        <div className="form-inner">
                            <input type="text" placeholder="Expense" value={expense} onChange={handleExpenseInput} className="input"/> 
                            <input type="text"  placeholder="Cost" value={cost} onChange={handleDateInput} className="input"/>
                            <input type="text" placeholder="Date" value={date} onChange={handleCostInput} className="input"/>
                            <input type="submit" value="Add Expense" className="submit"/>
                        </div>
                    </form>
                   {/* <form onSubmit={create_expense}>
                        <input 
                        className="input1"
                        placeholder="Expense"
                        value={expense} 
                        type='text' 
                        onChange={handleExpenseInput} 
                        style={{color: "#C0C0C0"}} 
                        />

                        <input 
                        placeholder="Date"
                        className="input2"
                        value={date} 
                        type='text' 
                        onChange={handleDateInput} 
                        style={{color: "#C0C0C0"}} 
                        />

                        <input 
                        className="input3"
                        placeholder="Cost" 
                        value={cost} 
                        type='text' 
                        onChange={handleCostInput} 
                        style={{color: "#C0C0C0"}}
                        />
                        <button class="submit">Add Expense</button>
                    </form> */}
                    </div>
                
                    <div className="expense_list">
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
            </div>    

        );




}
export default ExpenseContainer;
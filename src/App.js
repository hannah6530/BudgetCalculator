import './App.css';
import React from "react";
import ExpenseContainer from './Components/ExpenseContainer'
import Balance from './Components/Balance'
import Budget from './Components/Budget'
import Remaining from './Components/Remaining'

class App extends React.Component {

  state = {
    balance: '',
    budget: '',
    remaining: '',
    expenses: [],
    id: 0,
    expense_name: '',
    date: '',
    cost: ''

  }

  handleInput = (event) => {
    this.setState({
      budget: event.target.value
    })
    
  }
  handleExpenseInput = (event) => {
    this.setState({
      expense_name: event.target.value
    })
  }
  handleDateInput = (event) => {
    this.setState({
      date: event.target.value
    })
  }
  handleCostInput = (event) => {
    this.setState({
      cost: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert('Budget Updated!: ' + this.state.budget);
    event.preventDefault();
    // console.log(event.target.value)
  }

  handleSubmitExpense = (event) => {
    event.preventDefault();

    const newExpense = {
      id: this.state.id,
      expense_description: this.state.expense_name,
      date: this.state.date,
      cost: this.state.cost
    };

    const expenseList = [...this.state.expenses, newExpense];

    this.setState({
      expenses: expenseList, //updating the expenses array with newly added expenses
      expense_name: '', //resetting back to blank text box
      date: '',
      cost: '',
      id: this.state.id + 1
    })
   
    // console.log(event);

  }
  handleExpenses = (newExpense) => {
    this.setState({
      expenses: [...this.state.expenses, newExpense]
    })
  }

  render(){

    return (
      <div>
        <head>
          <link href="BudgetCalc.css" rel="stylesheet" type="text/css"></link>
        </head>
         <body>
           <div>
             <nav>
             <h2>Budget Calculator</h2>
              <img class="logo" src="/images/calculator.png" alt="logo"/>
             </nav>

            </div>
          </body>

          <ExpenseContainer
          handleExpenseList={this.handleExpenses}
          expense={this.state.expense_name}
          expenses={this.state.expenses}
          date={this.state.date}
          cost={this.state.cost}
          handleCostInput={this.handleCostInput}
          handleExpenseInput={this.handleExpenseInput}
          handleDateInput={this.handleDateInput}
          create_expense={this.handleSubmitExpense}
           />
          <Balance 
          />
          <Budget 
          handleBudgetInput={this.handleInput}
          budget={this.state.budget}
          handleSubmitBudget={this.handleSubmit}
          />
          <Remaining 
          />
      </div>
    );


  }

}

export default App;

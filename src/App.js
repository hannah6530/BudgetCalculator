import './App.css';
import React from "react";
import CalcContainer from './Components/CalcContainer'
import Balance from './Components/Balance'
import Budget from './Components/Budget'
import Remaining from './Components/Remaining'

class App extends React.Component {

  state = {
    balance: '',
    budget: '',
    remaining: '',
    expenses: [],
    id: 0
  }

  handleInput = (event) => {
    this.setState({
      budget: event.target.value
    })
    
  }

  handleSubmit = (event) => {
    alert('Budget Updated!: ' + this.state.budget);
    event.preventDefault();
    // console.log(event.target.value)
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

          <CalcContainer />
          <Balance />
          <Budget 
          handleBudgetInput={this.handleInput}
          budget={this.state.budget}
          handleSubmitBudget={this.handleSubmit}
          />
          <Remaining />
      </div>
    );


  }

}

export default App;

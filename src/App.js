import './App.css';
import React from "react";
import CalcContainer from './Components/CalcContainer'
import Balance from './Components/Balance'
import Budget from './Components/Budget'
import Remaining from './Components/Remaining'

class App extends React.Component {

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
          <Budget />
          <Remaining />
      </div>
    );


  }

}

export default App;

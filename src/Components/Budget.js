import React from "react";
import '../App.css';


const Budget = ({handleBudgetInput, budget, handleSubmitBudget}) => {

        return(
            <div id="budget">
                {/* <p id="budget_title">budget:</p>
                <div class="button">Edit</div> */}
                <form onSubmit={handleSubmitBudget}>
                  <label>budget: </label> 
                  <input type="text" value={budget} onChange={handleBudgetInput} />
                  <button className="button">Edit</button>
                </form>              
            </div>

        );

}
export default Budget;
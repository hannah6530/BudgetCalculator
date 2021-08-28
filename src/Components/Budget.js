import React from "react";
import '../App.css';


const Budget = ({handleBudgetInput, budget, handleSubmitBudget}) => {

        return(
            <div id="budget">
                {/* <p id="budget_title">budget:</p>
                <div class="button">Edit</div> */}
                <div id="budget_position">
                <form onSubmit={handleSubmitBudget}>
                  <label id="font_size">Budget: </label> 
                  <input type="text" value={budget} onChange={handleBudgetInput} id="budget_form" />
                  <button id="submit_budget">Edit</button>
                </form> 
                </div>
                            
            </div>

        );

}
export default Budget;
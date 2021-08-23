import React from 'react';
import '../App.css';


class Expense extends React.Component {

    render(){
        const { expense_description, date, cost } = this.props;

        return(
            <div id="expense_container">
                <p> {expense_description} </p>
                <p> {date} </p>
                <p> {cost} </p>
                
            </div>

        );
    }


}
export default Expense;
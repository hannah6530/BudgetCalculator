import React from 'react';


class Expense extends React.Component {

    render(){
        const { expense_description } = this.props;

        return(
            <div className="expense_container">
                <p> {expense_description} </p>
                
            </div>

        );
    }


}
export default Expense;
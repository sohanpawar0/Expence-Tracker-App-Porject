import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpenseContext from "../../Store/Expense-Context";
import ExpenseDisplay from "./ExpenseDisplay";

const ExpenseList = () => {
  const [expense, setExpense] = useState([]);

  const cntxt = useContext(ExpenseContext);
  const expensedata = useSelector((state) => state.expense.expenseData);

  useEffect(() => {
    display();
  }, []);

  const display = async () => {
    const data = await fetch(
      "https://expense-tracker-b7633-default-rtdb.firebaseio.com/expense.json "//get data from firebase
    );
    const value = await data.json();
    // console.log(value);
    cntxt.addExpense(value);
    const array = [];
    for (const key in value) {
      array.push({
        amount: value[key].amount,
        description: value[key].description,
        category: value[key].category,
      });
    }
    setExpense(array);
  };
  // console.log(expense);
  return (
    <div>
      <div>Expense List</div>
      {/* <ul> */}
      <div>
        {/* {cntxt.expense.map((item) => ( */}
        {expensedata.map((item) => (
          <li>
            {item.amount} --- {item.description} --- {item.category}
            
          </li>
        ))}
        <ExpenseDisplay data={expense} />
      </div>
      {/* </ul> */}
    </div>
  );
};

export default ExpenseList;

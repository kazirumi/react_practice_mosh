import React from "react";
import { TSexpenseSchema } from "../../schema/Exapense";

interface ExpenseListProps {
  Categories: string[];
  FilterExpense: Function;
  ExpenseList: TSexpenseSchema[];
  DeleteExpense: Function;
}

const ExpenseTrackerList = ({
  FilterExpense,
  Categories,
  ExpenseList,
  DeleteExpense,
}: ExpenseListProps) => {
  const TotalAmount = ExpenseList.reduce(
    (totalAmount, currentExpense) => totalAmount + currentExpense.amount,
    0
  ).toFixed(2);

  return (
    <>
      <label htmlFor="searchCategory" className="form-label">
        Category
      </label>
      <select
        onChange={(event)=>{FilterExpense(event.target.value)}}
        id="searchCategory"
        className="mb-3 form-control"
        required
      >
        <option value="">All Categories</option>
        {Categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <table className="mt-3 table table-bordered table-hoover">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ExpenseList.length > 0 &&
            ExpenseList.map((expense, i) => (
              <tr key={i}>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    onClick={() => {
                      DeleteExpense(i);
                    }}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          <tr>
            <td>Total</td>
            <td>${TotalAmount}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTrackerList;

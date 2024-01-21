import React, { useState } from "react";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import ExpenseTrackerList from "./ExpenseTrackerList";
import { TSexpenseSchema } from "../../schema/Exapense";

const data:TSexpenseSchema[]=[
  {
    description:
      "Id nostrud non commodo duis dolore dolore tempor officia officia mollit ut ut.",
    amount: 98,
    category: "Groceries",
  },
  {
    description:
      "Id nostrud non commodo duis dolore dolore tempor officia officia mollit ut ut.",
    amount: 23,
    category: "Entertainment",
  },
  {
    description:
      "Id nostrud non commodo duis dolore dolore tempor officia officia mollit ut ut.",
    amount: 23,
    category: "Utilities",
  },
  {
    description:
      "Id nostrud non commodo duis dolore dolore tempor officia officia mollit ut ut.",
    amount: 54,
    category: "Groceries",
  },
  {
    description:
      "Id nostrud non commodo duis dolore dolore tempor officia officia mollit ut ut.",
    amount: 234,
    category: "Entertainment",
  },
];
const ExpenseTracker = () => {
  const Categories = ["Groceries", "Utilities", "Entertainment"];
  const [ExpenseList, setExpenseList] = useState<TSexpenseSchema[]>(data);
  const [currentCategory, setCurrentCategory] = useState("");


  let onSubmitExpense = (data: TSexpenseSchema) => {
    setExpenseList([...ExpenseList, data]);
  };

  let onDeleteExpense = (index:number) => {
    ExpenseList.splice(index,1)
    setExpenseList([...ExpenseList]);
  };

  let onFilter =(category:string)=>{
    setCurrentCategory(category);
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <ExpenseTrackerForm
            Categories={Categories}
            setExpenseList={onSubmitExpense}
          />
        </div>
        <div className="col-md-6">
          <ExpenseTrackerList FilterExpense={onFilter} Categories={Categories} DeleteExpense={onDeleteExpense} ExpenseList={currentCategory=="" ? ExpenseList : ExpenseList.filter(expense=>expense.category==currentCategory)} />
        </div>
      </div>
    </>
  );
};

export default ExpenseTracker;

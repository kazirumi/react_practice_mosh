import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSexpenseSchema, expenseSchema } from "../../schema/Exapense";

interface ExpensFormProps {
  Categories: string[];
  setExpenseList: (data: TSexpenseSchema) => void;
}

const ExpenseTrackerForm = ({
  Categories,
  setExpenseList,
}: ExpensFormProps) => {
  const expenseForm = useForm<TSexpenseSchema>({
    resolver: zodResolver(expenseSchema),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = expenseForm;

  let onSubmit = (data: TSexpenseSchema) => {
    setExpenseList(data);
    reset();
  };

  return (
    <>
      <div>
        <FormProvider {...expenseForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              id="description"
              type="text"
              {...register("description")}
              className="mb-3 form-control"
              placeholder="Description"
            />
            {errors?.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
            <label htmlFor="amount1" className="form-label">
              Amount
            </label>
            <input
              type="number"
              step="0.01"
              id="amount1"
              {...register("amount")}
              className="mb-3 form-control"
              placeholder="Amount"
            />
            {errors?.amount && (
              <p className="text-danger">{errors.amount.message}</p>
            )}

            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              {...register("category")}
              id="category"
              className="mb-3 form-control"
              required
            >
              <option value="">Select Category</option>
              {Categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors?.category && (
              <p className="text-danger">{errors.category.message}</p>
            )}

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default ExpenseTrackerForm;

import { expenses } from "../../helpers/utils";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Expenses = () => {

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
        ))}
      </ul>
    </div>
  );
};

export default Expenses;

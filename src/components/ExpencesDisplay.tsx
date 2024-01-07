import { ExpenceType } from "./Expences";
import { useState } from "react";

interface Props {
  expences: ExpenceType[];
  setExpences: React.Dispatch<React.SetStateAction<ExpenceType[]>>;
}


function ExpencesDisplay({ expences, setExpences }: Props) {
  const [category, setCategory] = useState<"groceries" | "utilities">();

  const handelDelete = (id: number) => {
    setExpences((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="mt-5">
      <select
        className="form-select mb-3"
        onChange={(e) => {
          // if (e.target.value === "groceries" || e.target.value === "utilities") {
            setCategory(e.target.value as "groceries" | "utilities")
          // }
        }}
      >
        <option value="">-- Choose a category --</option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
      </select>

        {
          category &&
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expences &&
                expences.filter(expence=> expence.category === category ).map((expence) => (
                  <tr key={expence.id}>
                    <td>{expence.description}</td>
                    <td>{expence.amount}</td>
                    <td>{expence.category}</td>
                    <td>
                      <button
                        onClick={() => handelDelete(expence.id)}
                        className="btn btn-outline-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        }
    </div>
  );
}
export default ExpencesDisplay;

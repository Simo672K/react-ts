import { useForm, SubmitHandler} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string({
    required_error: "The amount is required.",
  }).min(3, {message: "3 characters minimum."}),
  amount: z.coerce
    .number({
      required_error: "The amount is required.",
      invalid_type_error: "Only numbers accepted.",
    }),
  category: z.enum(["groceries", "utilities"], {
    errorMap: (issue, _ctx) =>{
      switch(issue){
        default:
          return {message: "Choose a category."}
      }
    }

  }),
});

export type FormData = z.infer<typeof schema>;
interface ExpenceType extends FormData {
  id: number;
}

function ExpencesForm({setExpences}: {setExpences: React.Dispatch<React.SetStateAction<ExpenceType[]>> }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitHandler: SubmitHandler<FormData> = (data) => {
    setExpences(prev=> [...prev, {...data, id: Date.now()}])
    reset();
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          {...register("description")}
        />
        {
          errors.description &&
          <p className="text-danger">
            {errors.description.message}
          </p>
        }
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="Amount"
          {...register("amount")}
        />
        {
          errors.amount &&
          <p className="text-danger">
            {errors.amount.message}
          </p>
        }
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select className="form-select" id="category" {...register("category")}>
          <option></option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
        </select>
        {
          errors.category &&
          <p className="text-danger">
            {errors.category.message}
          </p>
        }
      </div>
      <button disabled={!isValid} className="btn btn-primary">Add Item</button>
    </form>
  );
}
export default ExpencesForm;

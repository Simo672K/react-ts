import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from 'clsx'

type FormComponentProps = {};

const schema = z.object({
  username: z.string().min(8, {message: "Username should be at least 8 characters."}),
  password: z.string().min(1, {message: "Password is required."}),
});

type FromData = z.infer<typeof schema>;

const Form: React.FC<FormComponentProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FromData>({resolver: zodResolver(schema)});

  const submitHandler: SubmitHandler<FromData> = (data) => console.log(data);

  return (
    <div className="card">
      <div className="card-header">
        <h5>A Login Component</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-danger fw-medium mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-danger fw-medium mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button disabled={!isValid} className={clsx("btn btn-primary w-100", !isValid && "disabled")} type="submit">
            Login
          </button>
        </form>
      </div>
      <div className="card-footer">powred by react and typescript</div>
    </div>
  );
};
export default Form;

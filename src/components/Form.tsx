import { useForm, SubmitHandler } from "react-hook-form";

type FormComponentProps = {};

type FromData = {
  username: string;
  password: string;
};

const Form: React.FC<FormComponentProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromData>();

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
              {...register("username", {required: true, minLength: 8})}
            />
            {
              errors.username?.type === "required" &&
              <p className="text-danger fw-medium mt-1">Username field is required.</p>
            }
            {
              errors.username?.type === "minLength" &&
              <p className="text-danger fw-medium mt-1">Username length at least 8 characters.</p>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              {...register("password", {required: true})}
              />
              {
                errors.password?.type === "required" &&
                <p className="text-danger fw-medium mt-1">Password field is required.</p>
              }
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </form>
      </div>
      <div className="card-footer">powred by react and typescript</div>
    </div>
  );
};
export default Form;

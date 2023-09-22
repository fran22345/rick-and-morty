import { useState } from "react";
import validate from "./validation";

const Form = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    setErrors(validate({ ...inputs, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" name="email">
        Email
      </label>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={inputs.name}
      />
      {errors.email ? <p className="danger">{errors.email}</p> : null}
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        onChange={handleChange}
        value={inputs.password}
      />
      {errors.password ? <p className="danger">{errors.password}</p> : null}
      <button type="submit"> Login</button>
    </form>
  );
};
export default Form;

import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import { loginUser } from "../services/authService";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const dispatch = useDispatch() 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async function (userData) {
    try {
      setServerError("");
      const {data} = await loginUser(userData);
      const {user} = data;
      dispatch(login(user))
      if(data?.success) navigate("/home");
    } catch (err) {
      setServerError(err);
      console.error("Login failed", err);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit(onSubmit)} className="auth-box">
        <h2>Login</h2>
        {serverError && <p className="error" style={{ marginBottom: "10px" }}>{serverError}</p>}
        <div className="input-group">
          <label>Email</label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Enter your email"
            required
          />
          {errors.email && <p className="error"> {errors.email.message}</p>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            {...register("password", {
              required: {
                value: true,
                message: "password is required",
              },
            })}
            type="password"
            placeholder="Create a password"
            required
          />
          {errors.password && (
            <p className="error"> {errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="btn">
          Login
        </button>

        <p className="switch-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/authService";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async function (userData) {
    try {
      const { data } = await registerUser(userData);
      if (data?.success) navigate("/home");
    } catch (err) {
      setServerError(err);
      console.error("Registration failed", err);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit(onSubmit)} className="auth-box">
        <h2>Register</h2>
        {serverError && (
          <p className="error" style={{ marginBottom: "10px" }}>
            {serverError}
          </p>
        )}
        <div className="input-group">
          <label>Name</label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "name is required",
              },
            })}
            type="text"
            placeholder="Enter your full name"
            required
          />
          {errors.name && <p className="error"> {errors.name.message}</p>}
        </div>

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
          Create Account
        </button>

        <p className="switch-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

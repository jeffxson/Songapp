import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };

    const headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    console.log(data);

    axios
      .post("/api/users/login", data, { headers: headers })
      .then((res) => {
        if (res.data.hasError === false) {
          localStorage.setItem("name", res.data.displayName);
          console.log(res.data);
          navigate("/");
          toast.success("login");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        toast.error("something went wrong");
      });
  };

  return (
    <div>
      <form>
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="passwords"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData,setFormData] = useState({});
    const navigate = useNavigate();
    const handleChange = (e)=>{
        let inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post(`https://reqres.in/api/login`,formData)
        .then((res)=>{
          if(res.status===200){
            navigate("/dashboard")
        }
        else{
            alert("Fill all credentials")
        }
        });
    }
  return (
    <div className="d-flex flex-column border w-50 p-4 mx-auto my-5">
    <h2>Login </h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleDropdownFormEmail2"
          placeholder="email@example.com"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleDropdownFormPassword2"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Log In
      </button>
    </form>
  </div>
  )
}

export default Login

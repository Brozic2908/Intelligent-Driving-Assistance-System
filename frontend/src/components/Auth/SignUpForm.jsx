<<<<<<< HEAD:frontend/src/components/Auth/SignUpForm.jsx
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpForm({ showLogin }) {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const username = document.getElementById('username_reg').value;
    const password = document.getElementById('password_reg').value;
    const confirm_password = document.getElementById('confirm_password').value;

    if (password !== confirm_password) {
      alert('Passwords do not match');
      return;
    }

    const request = {
      username: username,
      password: password,
    }
    
    axios.patch('http://127.0.0.1:8000/auth/register', request)
      .then(response => {
        if (response.status === 200) {
          navigate('/home');
        } else {
          alert('Sign-up failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during sign-up');
      });
  }


    return (
      <div id="sign-up-form" className="form-container bg-white text-center">
        <h2 className="primary-color mb-4 auth-title">Sign Up</h2>
        <form onSubmit={handleSignUp}>
=======
function SignUpForm({ showLogin }) {
    return (
      <div id="sign-up-form" className="form-container bg-white text-center">
        <h2 className="primary-color mb-4 auth-title">Sign Up</h2>
        <form>
>>>>>>> origin/main:src/components/Auth/SignUpForm.jsx
          <div className="mb-3 input-icon-container input-group">
            <label htmlFor="username_reg" className="input-group-text w-40px">
              <i className="fa-solid fa-user"></i>
            </label>
            <input
              type="text"
              id="username_reg"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="mb-3 input-icon-container input-group">
            <label htmlFor="password_reg" className="input-group-text w-40px">
              <i className="fa-solid fa-lock"></i>
            </label>
            <input
              type="password"
              id="password_reg"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="mb-3 input-icon-container input-group">
<<<<<<< HEAD:frontend/src/components/Auth/SignUpForm.jsx
            <label htmlFor="confirm_password" className="input-group-text w-40px">
              <i className="fa-solid fa-lock"></i>
            </label>
            <input
              type="password"
              id="confirm_password"
              className="form-control"
              placeholder="Confirm Password"
=======
            <label htmlFor="email_reg" className="input-group-text w-40px">
              <i className="fa-regular fa-envelope"></i>
            </label>
            <input
              type="text"
              id="email_reg"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-3 input-icon-container input-group">
            <label htmlFor="phone_reg" className="input-group-text w-40px">
              <i className="fa-solid fa-phone"></i>
            </label>
            <input
              type="text"
              id="phone_reg"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-3 input-icon-container input-group">
            <label htmlFor="address_reg" className="input-group-text w-40px">
              <i className="fa-solid fa-location-dot"></i>
            </label>
            <input
              type="text"
              id="address_reg"
              className="form-control"
              placeholder="Address"
>>>>>>> origin/main:src/components/Auth/SignUpForm.jsx
            />
          </div>
          <button type="submit" className="btn-login w-100 mb-4">
            Sign Up
          </button>
          <a href="#" className="text-decoration-none toggle-auth text-primary" onClick={showLogin}>
            Login
          </a>
        </form>
      </div>
    );
  }
  
  export default SignUpForm;
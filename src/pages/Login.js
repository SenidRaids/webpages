// import React, { useState } from 'react';
// import '../Styles/Login.css';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [rememberMe, setRememberMe] = useState(false);

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     setErrors({ ...errors, [name]: '' }); // Clear errors on input change
//   };

//   // Validate form fields
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email address is invalid';
//     }
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters long';
//     }
//     if (!isLogin && !formData.username) {
//       newErrors.username = 'Username is required';
//     }
//     return newErrors;
//   };

//   // Handle login submission
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     // Fetch the stored user data from localStorage
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
//       alert('Login successful!');
//       if (rememberMe) {
//         localStorage.setItem('rememberMe', formData.email);
//       } else {
//         localStorage.removeItem('rememberMe');
//       }
//       setFormData({ username: '', email: '', password: '' }); // Clear form
//       window.location.href = '/dashboard'; // Redirect after login (example)
//     } else {
//       alert('Invalid email or password.');
//     }
//   };

//   // Handle registration submission
//   const handleRegister = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     // Store the user data in localStorage for future login validation
//     const newUser = {
//       username: formData.username,
//       email: formData.email,
//       password: formData.password,
//     };
//     localStorage.setItem('user', JSON.stringify(newUser));
//     alert('Registration successful!');
//     setFormData({ username: '', email: '', password: '' }); // Clear form
//     setIsLogin(true); // Switch to login page after successful registration
//   };

//   return (
//     <div className="auth-page">
//       {isLogin ? (
//         <div className="login-form">
//           <h2>Login</h2>
//           <form onSubmit={handleLogin}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             {errors.email && <p className="error">{errors.email}</p>}
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             {errors.password && <p className="error">{errors.password}</p>}
//             <div className="remember-me">
//               <input
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={() => setRememberMe(!rememberMe)}
//               />
//               <label>Remember me</label>
//             </div>
//             <button type="submit">Login</button>
//           </form>
//           <p onClick={() => setIsLogin(false)}>Don't have an account? Register here.</p>
//         </div>
//       ) : (
//         <div className="register-form">
//           <h2>Register</h2>
//           <form onSubmit={handleRegister}>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//             {errors.username && <p className="error">{errors.username}</p>}
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             {errors.email && <p className="error">{errors.email}</p>}
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             {errors.password && <p className="error">{errors.password}</p>}
//             <button type="submit">Register</button>
//           </form>
//           <p onClick={() => setIsLogin(true)}>Already have an account? Login here.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import '../Styles/Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (!isLogin && !formData.username) {
      newErrors.username = 'Username is required';
    }
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      alert('Login successful!');
      
      // Save the logged-in user in localStorage or session
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      
      if (rememberMe) {
        localStorage.setItem('rememberMe', formData.email);
      } else {
        localStorage.removeItem('rememberMe');
      }
      setFormData({ username: '', email: '', password: '' });
      window.location.href = '/dashboard'; // Redirect to dashboard
    } else {
      alert('Invalid email or password.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Registration successful!');
    setFormData({ username: '', email: '', password: '' });
    setIsLogin(true);
  };

  return (
    <div className="auth-page">
      {isLogin ? (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <div className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label>Remember me</label>
            </div>
            <button type="submit">Login</button>
          </form>
          <p onClick={() => setIsLogin(false)}>Don't have an account? Register here.</p>
        </div>
      ) : (
        <div className="register-form">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <p className="error">{errors.username}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <button type="submit">Register</button>
          </form>
          <p onClick={() => setIsLogin(true)}>Already have an account? Login here.</p>
        </div>
      )}
    </div>
  );
};

export default Login;



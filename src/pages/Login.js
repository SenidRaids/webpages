// import React, { useState } from 'react';
// import '../Styles/Login.css';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="auth-page">
//       {isLogin ? (
//         <div className="login-form">
//           <h2>Login</h2>
//           <form>
//             <input type="email" placeholder="Email" required />
//             <input type="password" placeholder="Password" required />
//             <button type="submit">Login</button>
//           </form>
//           <p onClick={() => setIsLogin(false)}>Don't have an account? Register here.</p>
//         </div>
//       ) : (
//         <div className="register-form">
//           <h2>Register</h2>
//           <form>
//             <input type="text" placeholder="Username" required />
//             <input type="email" placeholder="Email" required />
//             <input type="password" placeholder="Password" required />
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Example logic to handle login
    if (formData.email === 'test@example.com' && formData.password === 'password') {
      alert('Login successful!');
      localStorage.setItem('user', JSON.stringify({ email: formData.email }));
      setFormData({ username: '', email: '', password: '' }); // Clear form
    } else {
      alert('Invalid email or password.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Example logic to handle registration
    if (formData.username && formData.email && formData.password) {
      alert('Registration successful!');
      localStorage.setItem('user', JSON.stringify({ username: formData.username, email: formData.email }));
      setFormData({ username: '', email: '', password: '' }); // Clear form
    } else {
      alert('Please fill out all fields.');
    }
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
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
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
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Register</button>
          </form>
          <p onClick={() => setIsLogin(true)}>Already have an account? Login here.</p>
        </div>
      )}
    </div>
  );
};

export default Login;


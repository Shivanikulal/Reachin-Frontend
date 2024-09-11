import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc'; // Google icon from react-icons
import Toggle from './ToggleButton'; // Ensure the correct import path
import './LoginPage.css'; // CSS for the login page

const LoginPage = () => {
  const [theme, setTheme] = useState('dark');

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`login-page ${theme}`}>
      <header className="header">
        <h1 className="logo">REACHINBOX</h1>
        <Toggle theme={theme} toggleTheme={toggleTheme} /> {/* Using Toggle Component */}
      </header>

      <div className="login-box">
        <h2>Create a new account</h2>

        {/* Google Login Button */}
        <GoogleOAuthProvider clientId="your-google-client-id">
          <GoogleLogin
            onSuccess={(response) => {
              console.log('Login successful:', response);
              // Handle the response token here
              // For example, you might want to redirect or store the token
            }}
            onError={() => console.log('Login Failed')}
            render={({ onClick }) => (
              <button className="google-btn" onClick={onClick}>
                <FcGoogle className="google-icon" />
                Sign Up with Google
              </button>
            )}
          />
        </GoogleOAuthProvider>

        <button className="create-account-btn">Create an Account</button>
        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>

      <footer>
        <p>© 2024 ReachInbox. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginPage;

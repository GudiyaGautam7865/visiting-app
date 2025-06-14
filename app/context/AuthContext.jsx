// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [loggedInEmail, setLoggedInEmail] = useState(null); // ✅ Use this everywhere

//   return (
//     <AuthContext.Provider value={{ loggedInEmail, setLoggedInEmail }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// app/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const signup = (name, email, password) => {
    const existing = users.find(u => u.email === email);
    if (existing) return { success: false, message: 'Email already exists' };
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    return { success: true };
  };

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ users, currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

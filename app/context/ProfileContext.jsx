// context/ProfileContext.js
import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'Gudiya Gautam',
    phone: '91-7845767896',
    email: 'Kapilkamat@gmail.com',
    address: '12-4B, sector-2, lane-6, kuruli, Pune 411025',
    password: 'Password reset',
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

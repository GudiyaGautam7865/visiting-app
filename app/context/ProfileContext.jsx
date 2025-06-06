import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'Kapil kamat',
    phone: '91-7845767896',
    email: 'Kapilkamat@gmail.com',
    address: '12-4B, sector-2, lane-6, kuruli, Pune 411025',
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

import React, { createContext, useState } from 'react';
import userImage from './components/my.jpg'; 

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Glich", avatar: userImage });

  const updateUserName = (newName) => {
    setUser((prevUser) => ({ ...prevUser, name: newName }));
  };

  const updateUserAvatar = (newAvatar) => {
    setUser((prevUser) => ({ ...prevUser, avatar: newAvatar }));
  };

  return (
    <UserContext.Provider value={{ user, updateUserName, updateUserAvatar }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

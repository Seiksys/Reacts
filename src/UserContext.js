import React, { createContext, useState } from 'react';
import userImage from './components/my.jpg'; // 导入默认的用户图片

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Glich", avatar: userImage });

  const updateUserName = (newName) => {
    setUser({ ...user, name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

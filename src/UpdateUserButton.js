import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import newUserImage from './components/newUserImage.jpg'; // 导入新的用户图片

function UpdateUserButton() {
  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({ name: "", avatar: newUserImage });
  };

  return (
    <button onClick={handleClick}>Update User</button>
  );
}

export default UpdateUserButton;

// UserComponent.tsx
import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext';

const UserComponent: React.FC = () => {
  const { name, age, setName, setAge } = useUser();
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState<number>(0);

  const handleUpdate = () => {
    setName(newName);
    setAge(newAge);
  };

  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <input
        type="text"
        placeholder="Enter name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={newAge}
        onChange={(e) => setNewAge(Number(e.target.value))}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UserComponent;
import React from 'react';

interface UserCardProps {
  name: string;
  emp_id: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, emp_id }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Employee Id: {emp_id}</p>
    </div>
  );
};



export default UserCard;
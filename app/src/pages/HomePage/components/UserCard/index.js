import React from "react";
import "./styles.css";

const UserCard = ({ userName, userAge, userLastName }) => {
  return (
    <div className="wrapper">
      <p>Name: {userName}</p>
      <p>Age: {userAge}</p>
      <p>Last Name: {userLastName}</p>
    </div>
  );
};

export default UserCard;

import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  //some dummy data (temporary)
  const USERS = [
    {
      id: "u1",
      name: "Dan Konst",
      image:
        "https://www.failbettergames.com/wp-content/uploads/2014/05/avatar_male1.png",
      places: 3
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;

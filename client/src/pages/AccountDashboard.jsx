import React, { useEffect, useState } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { url } from "../utils/url";
import Bookings from "./Bookings";

const AccountDashboard = () => {
  const [user, setUser] = useState([]);
  const UserDetails = async () => {
    let res = await fetch(`${url}user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    let data = await res.json();
    console.log(data);
    setUser(data.user);
  };
  useEffect(() => {
    UserDetails();
  }, []);

  const DisplayUser = () => {
    if (user) {
      return (
        <div>
          {user?.map((el, i) => {
            return (
              <div key={i}>
                <h1>{el.name}</h1>
                <h2>{el.email}</h2>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <h1>Please Login To see Your Data, Sorry For Inconvinence</h1>;
    }
  };
  return (
    <div>
      <DisplayUser />
      <SimpleGrid
        columns={2}
        spacing={10}
        width={"30%"}
        margin="auto"
        marginBottom={"2%"}
      >
        <RouterLink to="/bookings">
          <Box height="auto">Bookings</Box>
        </RouterLink>
        <RouterLink to="/hosted">
          <Box height="auto">Hosted</Box>
        </RouterLink>
      </SimpleGrid>
      <Bookings />
    </div>
  );
};

export default AccountDashboard;

import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const HostedCard = ({ address, price, title, photos, user }) => {
  console.log({ address, price, title, photos, user });
  return (
    <Card border={"2px solid black"}>
      <CardBody>
        <img src={photos[0]} alt="" />
        <h2>
          hosted - Mr. {user.name} and contact at {user.email}
        </h2>
        <h2>At {address} </h2>
        <h2>Price - {price}</h2>
      </CardBody>
    </Card>
  );
};

export default HostedCard;

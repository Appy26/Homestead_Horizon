import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const BookingCard = ({ BookedBy, checkIn, checkOut, phone, place, price }) => {
  console.log({ BookedBy, checkIn, checkOut, phone, place, price });
  return (
    <Card border={"2px solid black"}>
      <CardBody>
        <img src={place.photos[0]} alt="" />
        <h2>BookedBy - Mr. {BookedBy}</h2>
        <h2>
          From {checkIn} to {checkOut}
        </h2>
        <h2>Price - {price}</h2>
      </CardBody>
    </Card>
  );
};

export default BookingCard;

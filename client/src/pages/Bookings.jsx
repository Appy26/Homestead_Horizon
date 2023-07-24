import React, { useEffect, useState } from "react";
import { url } from "../utils/url";
import { SimpleGrid } from "@chakra-ui/react";
import BookingCard from "../components/BookingCard";

const Bookings = () => {
  const [property, setProperty] = useState([]);
  const GetAllBookings = async () => {
    let res = await fetch(`${url}bookings/single`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    let data = await res.json();
    console.log(data);
    setProperty(data.user);
  };
  useEffect(() => {
    GetAllBookings();
  }, []);
  return (
    <div>
      <SimpleGrid minChildWidth="300px" spacing={70}>
        {property.map((el, index) => {
          return (
            <BookingCard
              key={index}
              BookedBy={el.name}
              price={el.price}
              checkIn={el.checkIn}
              checkOut={el.checkOut}
              phone={el.phone}
              place={el.place}
            />
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Bookings;

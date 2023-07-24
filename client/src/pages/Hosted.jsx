import React, { useEffect, useState } from "react";
import { SimpleGrid, Box, Input } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { url } from "../utils/url";
import HostedCard from "../components/HostedCard";
import HostedAll from "../components/HostedAll";

const Hosted = () => {
  const [title, setTitle] = useState("");
  const [rooms, setRooms] = useState(0);
  const [place, setPlace] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [allprop, setAllprop] = useState([]);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, rooms, place, address, price });
    let obj = {
      title,
      no_of_rooms: Number(rooms),
      photos: [place],
      address,
      price: Number(price),
    };
    console.log(obj);
    let res = await fetch(`${url}property/add`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    let data = await res.json();
    console.log(data);
    alert(data.msg);
    HandleGetData();
  };

  const HandleGetData = async () => {
    let res = await fetch(`${url}property/userproperty`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    let data = await res.json();
    console.log(data);
    setAllprop(data.user);
  };
  useEffect(() => {
    HandleGetData();
  }, []);
  return (
    <>
      <SimpleGrid
        columns={2}
        spacing={10}
        width={"30%"}
        margin="auto"
        marginBottom={"2%"}
      >
        <RouterLink to="/account">
          <Box height="auto">Bookings</Box>
        </RouterLink>
        <RouterLink to="/hosted">
          <Box height="auto">Hosted</Box>
        </RouterLink>
      </SimpleGrid>

      <div>
        <br />
        <form
          action=""
          onSubmit={(e) => {
            HandleSubmit(e);
          }}
        >
          <Input
            width="450px"
            htmlSize={50}
            border="2px solid teal"
            type="text"
            placeholder="Enter Title Apartment , Flat, House"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <Input
            type="text"
            width="450px"
            htmlSize={50}
            border="2px solid teal"
            placeholder="Enter address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <br />
          <br />
          <Input
            type="number"
            width="450px"
            htmlSize={50}
            border="2px solid teal"
            placeholder="Enter price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <br />
          <br />
          <Input
            type="text"
            width="450px"
            htmlSize={50}
            border="2px solid teal"
            placeholder="Enter Photos"
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }}
          />
          <br />
          <br />
          <Input
            type="number"
            width="450px"
            htmlSize={50}
            border="2px solid teal"
            placeholder="Enter Number of Rooms"
            value={rooms}
            onChange={(e) => {
              setRooms(e.target.value);
            }}
          />
          <br />
          <br />
          <Input
            type="submit"
            width="450px"
            htmlSize={50}
            border="2px solid teal"
            value="Add a New Property"
          />
        </form>
      </div>
      <HostedAll allprop={allprop} />
    </>
  );
};

export default Hosted;

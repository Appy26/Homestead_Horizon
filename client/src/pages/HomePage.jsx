import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import { SimpleGrid } from "@chakra-ui/react";
import styles from "../styles/style.module.css";

const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const getData = async () => {
    let res = await fetch("https://airbndserver.onrender.com/property/all");
    let data = await res.json();
    setRooms(data.data);
  };
  console.log(rooms);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.main}>
      <SimpleGrid minChildWidth="300px" spacing={70}>
        {rooms?.map((el, index) => {
          return (
            <CardComponent
              key={index}
              title={el.title}
              price={el.price}
              address={el.address}
              no_of_rooms={el.no_of_rooms}
              photos={el.photos}
              user={el.user}
              id={el._id}
            />
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default HomePage;

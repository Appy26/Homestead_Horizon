import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { url } from "../utils/url";

const CardComponent = ({
  title,
  price,
  address,
  no_of_rooms,
  photos,
  user,
  id,
}) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [phone, setPhone] = useState(0);
  // const [price, setPrice] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const HandleBook = async (id, price) => {
    console.log(id);
    let obj = { checkIn, checkOut, phone, place: id, price };
    if (localStorage.getItem("token") === "") {
      alert("please login first");
    } else {
      let res = await fetch(`${url}bookings/add`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
      });
      let data = await res.json();
      console.log(data);
    }
  };
  return (
    <>
      <Card maxW="sm" variant="filled" border="2px solid gray">
        <CardBody>
          <Image
            width="100%"
            src={photos[0]}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>
              This property is perfect for modern tropical spaces, baroque
              inspired spaces, earthy toned spaces and for people who love a
              chic design with a sprinkle of vintage design with {no_of_rooms}{" "}
              rooms. The property is added by {user.name} at {address}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="100">
            <Button variant="solid" colorScheme="red" onClick={onOpen}>
              Book Now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Preview
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fill Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter CheckinIn"
              type="Date"
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
              }}
            />
            <Input
              placeholder="Enter CheckOut"
              type="Date"
              value={checkOut}
              onChange={(e) => {
                setCheckOut(e.target.value);
              }}
            />
            <Input
              placeholder="Enter Phone Number"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                HandleBook(id, price);
                if (!localStorage.getItem("token")) {
                  toast({
                    title: "Please Login",
                    position: "top",
                    description: "Please Login",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
                } else {
                  toast({
                    title: "Booked Successfully",
                    position: "top",
                    description: "Booked Successfully",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  });
                }
              }}
            >
              Book Property
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardComponent;

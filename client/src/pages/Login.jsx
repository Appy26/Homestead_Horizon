import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { url } from "../utils/url";
import { AuthContext } from "../context/Auth.context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(false);
  const [t, setT] = useState("");
  const { LoginFunc } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const HandleSubmit = async () => {
    let obj = { email, password };
    let res = await fetch(`${url}user/login`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
    if (data.msg == "Successfully signed in") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      LoginFunc();
      setMsg(true);
      setT("logged In ");
      navigate("/");
    } else {
      setMsg(false);
      setT("wrong credentials");
      navigate("/login");
    }
  };
  console.log(t);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  HandleSubmit();
                  toast({
                    title: "Logged In Successfully",
                    position: "top",
                    description: t,
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Sign in
              </Button>
              <FormControl>
                <FormHelperText>
                  Not an User?
                  <Link color={"blue.400"}>
                    {" "}
                    <RouterLink to="/signup">Register Here</RouterLink>
                  </Link>
                </FormHelperText>
              </FormControl>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

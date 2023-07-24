import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { status, LoginFunc } = useContext(AuthContext);
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <RouterLink to="/">
              <img
                style={{ width: "10%", borderRadius: "50%" }}
                src="https://i.ibb.co/fHjCFjM/Black-White-Simple-Monochrome-Initial-Name-Logo.png"
                alt="logo"
              />
            </RouterLink>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{localStorage.getItem("username")}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Stack spacing={2}>
                    <RouterLink to="/login">
                      <Button isDisabled={status}>Login</Button>
                    </RouterLink>
                    <RouterLink to="/account">
                      <Button>Account Page</Button>
                    </RouterLink>
                    <Button
                      isDisabled={!status}
                      onClick={() => {
                        LoginFunc();
                        localStorage.setItem("token", "");
                        localStorage.setItem("username", "");
                      }}
                    >
                      Logout
                    </Button>
                  </Stack>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

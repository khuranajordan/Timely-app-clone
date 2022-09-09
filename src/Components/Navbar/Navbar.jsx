import React from "react";
import { Center, Flex, Image, Text } from "@chakra-ui/react";
import Features from "./Features";
import Solutions from "./Solutions";
import Resources from "./Resources";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Center
      bg="#722fd3"
      opacity="1"
      zIndex="1"
      w="100%"
      h="90px"
      p={4}
      color="white"
      align="center"
      position="fixed"
    >
      <Flex flexDirection="row">
        <Link to="/">
          <Image
            src="https://i.postimg.cc/tTHZYx7x/logo.png"
            h="66.04"
            w="135.35"
            marginRight="130px"
          />
        </Link>
        <Features />
        <Solutions />
        <Text marginTop="26px" cursor="pointer" fontWeight="bold">
          Pricings
        </Text>
        <Resources />
        <Text
          marginTop="26px"
          cursor="pointer"
          fontWeight="bold"
          marginRight="20px"
        >
          Talk to sales
        </Text>
        <Link to="/Login">
          <Text marginTop="26px" cursor="pointer" fontWeight="bold">
            <FontAwesomeIcon icon={faRightToBracket} />
            &nbsp;Login
          </Text>
        </Link>
        <div className={styles.navbar_btn}>
          <input type="submit" value={"Start 14-day free trial"} />
        </div>
        <Image
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399514908af72d_made-by-white.svg"
          cursor={"pointer"}
          marginTop="5px"
        />
      </Flex>
    </Center>
  );
};

export default Navbar;

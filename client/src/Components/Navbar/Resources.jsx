import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  RepeatClockIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsAslInterpreting,
  faLock,
  faPeopleGroup,
  faRuler,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Resources = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        marginTop="10px"
        variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        borderRadius={5}
        _hover={{ bg: useColorModeValue("#722fd3") }}
        aria-label="Courses"
        fontWeight="bold"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        Resources {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        bg="#fff"
        border="none"
        borderRadius="5%"
        color="#000"
      >
        <MenuItem>
          <TimeIcon />
          &nbsp;Blog
        </MenuItem>
        <MenuItem>
          <RepeatClockIcon />
          &nbsp;Case Studies
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faPeopleGroup} />
          &nbsp;Podcast
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faRuler} />
          &nbsp;Books
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faHandsAslInterpreting} />
          &nbsp;Webinar
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faLock} />
          &nbsp;Time Tracking Guide
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faPeopleGroup} />
          &nbsp;Support
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Resources;

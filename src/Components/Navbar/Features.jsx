import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, RepeatClockIcon, TimeIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsAslInterpreting,
  faLock,
  faPeopleGroup,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Features = () => {
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
        _hover={{ bg: useColorModeValue("#722fd3")}}
        aria-label="Courses"
        fontWeight="bold"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        Features {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
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
          &nbsp;Track Time
        </MenuItem>
        <MenuItem>
          <RepeatClockIcon />
          &nbsp;Track Project
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faPeopleGroup} />
          &nbsp;Track Teams
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faRuler} />
          &nbsp;Track Plans
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faHandsAslInterpreting} />
          &nbsp;Integerations
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faLock} />
          &nbsp;Our Privacy Promise
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Features;

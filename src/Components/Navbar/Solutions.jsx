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

const Solutions = () => {
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
        Solutions {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
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
            &nbsp;Consulting Firm
          </MenuItem>
          <MenuItem>
            <RepeatClockIcon />
            &nbsp;Software Companies
          </MenuItem>
          <MenuItem>
            <FontAwesomeIcon icon={faPeopleGroup} />
            &nbsp;Agencies
          </MenuItem>
          <MenuItem>
            <FontAwesomeIcon icon={faRuler} />
            &nbsp;Designers & creatives
          </MenuItem>
          <MenuItem>
            <FontAwesomeIcon icon={faHandsAslInterpreting} />
            &nbsp;Lawyers
          </MenuItem>
          <MenuItem>
            <FontAwesomeIcon icon={faLock} />
            &nbsp;Accountants
          </MenuItem>
          <MenuItem>
            <FontAwesomeIcon icon={faPeopleGroup} />
            &nbsp;Teams
          </MenuItem>
          <MenuItem>
            <FontAwesomeIcon icon={faUser} />
            &nbsp;Freelancers
          </MenuItem>
        </MenuList>
    </Menu>
  );
};

export default Solutions;

import React from "react";
import {
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Links from "./links";
const renderIcon = (isOpen) => (isOpen ? <CloseIcon /> : <HamburgerIcon />);
const Navbar = () => {
  const initRef = React.useRef();
  return (
    <Flex
      bg={"lightblue"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"absolute"}
      width={"100%"}
      padding={".75rem"}
    >
      Logo
      <Popover
        closeOnBlur={false}
        placement={"bottom-end"}
        initialFocusRef={initRef}
      >
        {({ isOpen }) => (
          <>
            <PopoverTrigger>
              <IconButton icon={renderIcon(isOpen)} />
            </PopoverTrigger>
            <PopoverContent width={"fit-content"}>
              <PopoverBody>
                <Links />
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
    </Flex>
  );
};

export default Navbar;

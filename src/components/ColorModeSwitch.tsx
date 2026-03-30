import { HStack, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";


const ColorModeSwitch = () => {
  return (
    <HStack>
        <ColorModeButton />
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch

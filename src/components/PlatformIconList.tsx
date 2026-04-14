import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { BsNintendoSwitch } from "react-icons/bs";
import type { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: BsNintendoSwitch,
        mac: FaApple,
        android: FaAndroid,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;

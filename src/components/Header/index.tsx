import { Box, Image } from "@chakra-ui/react";

import BgHeader from "../../images/bg-header.png";
import Player from "../../images/player.png";

export function Header() {
  return (
    <Box 
        w="100vw" 
        h="390px" 
        p={4} 
        color="white" 
        backgroundImage={BgHeader} 
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
      <Image 
        src={Player} 
        alt='player'
        width="105px"
        marginTop={350}
     />
    </Box>
  );
}

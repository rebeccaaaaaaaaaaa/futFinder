import { Button, Box } from "@chakra-ui/react";
import {Link} from "react-router-dom";

export function BackButton() {
  return (
    <Box position="absolute" top={0} margin="1rem">
        <Link to="/">
            <Button bg="transparent" color="#fff" _hover={{
                bg: "gray.100",
                color: "gray.800",
                transition: "all 0.5s ease-in-out"

            }}>
                Voltar
            </Button>
        </Link>
    </Box>
  )
}


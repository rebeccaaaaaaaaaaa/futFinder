import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";

// importações somente para teste de desenvolvimento
import SantosLogo from "../../images/santos.png";
import Mascote from "../../images/mascote.png";

export function InsideInfo() {
  return (
    <div style={{ maxWidth: "95ch", margin: "0 auto"}}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop="110px" marginBottom="110px">
        <GridItem>
          <Box display="flex" alignItems="center">
            <img src={SantosLogo} alt="Santos" />
            <Heading as="h1" size="md" marginLeft="16px">
              Santos
            </Heading>
          </Box>
          <Box marginTop="15px">
            <p>
              <strong> Fundação: </strong> 1930
            </p>
            <p>
              <strong> Nome estádio: </strong> Morumbi
            </p>
            <p>
              <strong> Páis: </strong> Brasil
            </p>
          </Box>

          <Box marginTop="15px">
            <p>
              <strong> Titulos: </strong>
            </p>
            <ul>
              <li>
                <strong> Campeonato Brasileiro: </strong> 98
              </li>
              <li>
                <strong> Libertadores da América: </strong> 22
              </li>
              <li>
                <strong> Mundial Interclubes: </strong> 11
              </li>
            </ul>
          </Box>
        </GridItem>

        <GridItem display="flex" alignItems="center" flexDirection="column" marginTop={15}>
          <img src={Mascote} alt="Mascote" />
        </GridItem>
      </Grid>
    </div>
  );
}

import { Grid, GridItem, Box, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface TimesProps {
  id: number;
  nomeTime: string;
  pais: string;
  estado: string;
  escudo: string;
  mascote: string;
  titulos: {
    copa: number;
    copa_do_mundo: number;
    copa_da_fifa: number;
  }
}

export function Card(props: TimesProps) {
  return (
    <div style={{ width: "80%", margin: "auto", paddingTop: "60px" }}>
      <Link to="/details">
        <GridItem w="100%">
          <Box
            display="flex"
            gap={5}
            w="100%"
            alignItems="center"
            justifyContent="center"
            shadow="0px 6px 9px #00000016"
            borderRadius="10px"
            padding={15}
            cursor="pointer"
            _hover={{
              transform: "scale(1.02)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Image src={props.escudo} alt={"Escudo do " + props.nomeTime} width="55px" height="55px" objectFit="contain"/>
            <div className="boxText">
              <Heading as="h1" size="14px">
                {" "}
                {props.nomeTime}{" "}
              </Heading>
              <p>
                {" "}
                {props.pais} - {props.estado}{" "}
              </p>
            </div>
          </Box>
        </GridItem>
      </Link>
    </div>
  );
}

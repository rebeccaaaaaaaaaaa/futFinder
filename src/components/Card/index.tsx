import { Grid, GridItem, Box, Image, Heading  } from "@chakra-ui/react";

interface TimesProps{
  nomeTime: string;
  pais: string;
  estado: string;
  escudo: string;
}

export function Card(props: TimesProps) {
  return (
    <div style={{width: '80%', margin: 'auto', paddingTop: '60px'}}>
        <GridItem w="100%">
          <Box 
            display="flex" 
            gap={5} w="100%" 
            alignItems="center" 
            justifyContent="center"
            shadow="0px 6px 9px #00000016"
            borderRadius="10px"
            padding={15}
            cursor="pointer"
            _hover={{
              transform: 'scale(1.02)',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <Image src={props.escudo} alt={"Escudo do " + props.nomeTime} />
             <div className="boxText">
              <Heading as='h1' size='md'> {props.nomeTime} </Heading>
              <p> {props.pais} - {props.estado} </p>
             </div>
          </Box>
        </GridItem>
    </div>
  );
}

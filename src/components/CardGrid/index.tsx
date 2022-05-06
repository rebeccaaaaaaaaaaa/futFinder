import {Card} from '../Card';
import { Container, Grid } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'

// imagens de teste
import SantosEscudo from "../../images/santos.png";
import PalmeirasEscudo from "../../images/palmeiras.png";
import { useGlobalContext } from '../../hooks/useGlobalContext';

export function CardGrid() {
  const [isSmall] = useMediaQuery('(max-width: 768px)');
  const { times } = useGlobalContext();

  return (
    <Container>
          <Grid templateColumns={isSmall ? "repeat(1, 1fr)" : "repeat(2,1fr)"} gap={6}>
        {/* <Card nomeTime="Santos" pais="Brasil" estado="SP" escudo={SantosEscudo} /> */}

        {
          times.map((time) => {
            return (
              <Card key={time.id} nomeTime={time.nome} pais={time.pais} estado={time.estado} escudo={time.escudo} id={0} mascote={''} titulos={{
                copa: 0,
                copa_do_mundo: 0,
                copa_da_fifa: 0
              }} />
            )
          })
        }


    </Grid>
    </Container>
  )
}


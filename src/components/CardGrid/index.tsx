import {Card} from '../Card';
import { Grid } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'

// imagens de teste
import SantosEscudo from "../../images/santos.png";
import PalmeirasEscudo from "../../images/palmeiras.png";

export function CardGrid() {
  const [isSmall] = useMediaQuery('(max-width: 768px)');

  return (
    <Grid templateColumns={isSmall ? "repeat(1, 1fr)" : "repeat(4,1fr)"} gap={6}>
        <Card nomeTime="Santos" pais="Brasil" estado="SP" escudo={SantosEscudo} />
        <Card nomeTime="Palmeiras" pais="Brasil" estado="SP" escudo={PalmeirasEscudo} />
        <Card nomeTime="Santos" pais="Brasil" estado="SP" escudo={SantosEscudo} />
        <Card nomeTime="Palmeiras" pais="Brasil" estado="SP" escudo={PalmeirasEscudo} />
        <Card nomeTime="Santos" pais="Brasil" estado="SP" escudo={SantosEscudo} />
        <Card nomeTime="Palmeiras" pais="Brasil" estado="SP" escudo={PalmeirasEscudo} />
        <Card nomeTime="Santos" pais="Brasil" estado="SP" escudo={SantosEscudo} />
        <Card nomeTime="Palmeiras" pais="Brasil" estado="SP" escudo={PalmeirasEscudo} />

    </Grid>
  )
}


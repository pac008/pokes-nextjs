import React, { FC } from 'react'
import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router';

interface Props {
    id: number;
}
export const FavoriteCard: FC<Props> = ({id}) => {
    const router = useRouter()
    const onFavoriteClicked = () => {
        router.push(`/pokemon/${id}`);
    }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClicked}>
    <Card isPressable isHoverable css={{ padding: 10 }} >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        width="100%"
        height={160}
      />
    </Card>
  </Grid>
  )
}

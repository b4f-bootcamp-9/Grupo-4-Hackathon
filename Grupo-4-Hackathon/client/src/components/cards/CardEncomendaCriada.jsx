import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, border: '2px solid blue' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/mysterybox_c1866283-96b8-4e87-958a-80a3ecaa99e8.png"
          alt="Mistery Box"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pedido Mistery Box  
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Pedido criado com sucesso, armazêm a prepara a sua encomenda com muito carinho.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
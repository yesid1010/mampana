import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,93,9,1) 35%, rgba(0,212,255,1) 100%)',
  ...theme.typography.body1,
  padding: theme.spacing(4),
  textAlign: 'center',
  color:'white',
}));

export default function Home() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>Cervezas</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Tragos</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Coctails y Micheladas</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Mecatos</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
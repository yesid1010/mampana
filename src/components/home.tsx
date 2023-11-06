import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  
    background: 'linear-gradient(90deg, rgba(9,9,9,1) 0%, rgba(145,145,80,1) 35%, rgba(22,16,1,1) 100%, rgba(50,52,45,0.1294642857142857) 100%)',
  ...theme.typography.button,
  padding: theme.spacing(4),
  textAlign: 'center',
  color:'white',
  boxShadow:'5px 5px 5px #FFD700'
}));

export default function Home() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Link to="/cervezas">
          <Item>Cervezas</Item>
          </Link>
        </Grid>
        <Grid item xs={6} >
        <Link to="/tragos">
          <Item>Tragos</Item>
          </Link>
        </Grid>
        <Grid item xs={6}>
        <Link to="/coctails">
          <Item>Coctails</Item>
          </Link>
        </Grid>
        <Grid item xs={6}>
        <Link to="/mecatos">
          <Item>Mecatos</Item>
          </Link>
        </Grid>
        <Grid item xs={6}>
        <Link to="/cigarrillos">
          <Item>Cigarrillos</Item>
          </Link>
        </Grid>
        <Grid item xs={6}>
        <Link to="/otros">
          <Item>Otros</Item>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
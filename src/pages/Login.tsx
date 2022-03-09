import { Grid } from '@mui/material';
import LoginForm from '../components/auth/LoginForm';
import background from '../images/backround.png';

function Login() {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={8}>
        <img style={{ width: '100%' }} src={background} />
      </Grid>
      <Grid item xs={4}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}

export default Login;

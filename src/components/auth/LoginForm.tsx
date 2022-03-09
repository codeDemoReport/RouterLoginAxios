import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  Button,
  FormControl,
  FormGroup,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { login } from '../../redux/actions/authAction';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Ievent, Istate } from '../interfaces';

function LoginForm() {
  const [data, setData] = useState({ email: '', password: '' });
  const auth = useSelector((state: Istate) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (auth.user) history.push('/');
  }, [auth.user]);

  const handleSubmit = () => {
    dispatch(login(data));
  };

  const handleChange = (e: Ievent) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ height: '800px' }}>
        <FormControl
          sx={{ margin: '10px', width: '400px', marginTop: '100px' }}
        >
          <Typography variant="h3">Login</Typography>
          <FormGroup sx={{ margin: '10px' }}>
            <TextField
              label={'email'}
              name="email"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup sx={{ margin: '10px' }}>
            <TextField
              label={'password'}
              name="password"
              required
              variant="outlined"
              onChange={handleChange}
              type={'password'}
            />
          </FormGroup>
          <FormGroup sx={{ margin: '10px' }}>
            <Button type="submit" variant="outlined" onClick={handleSubmit}>
              Login
            </Button>
          </FormGroup>
          <Grid container>
            <Grid item sm={6}></Grid>
            <Grid item sm={6}>
              {/* <Link> */}
              <Typography paddingRight={0}>
                <Link to={'/forgot'}>Forgot password?</Link>
              </Typography>
              {/* </Link> */}
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </Box>
  );
}

export default LoginForm;

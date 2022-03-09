import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Istate, Iauth } from '../interfaces';
import { Logout } from '../../redux/actions/authAction';
import { useEffect } from 'react';

function Header() {
  const auth = useSelector((state: Istate) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={'div'} sx={{ mr: 2 }}>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" component={'div'}>
            <Link
              to={'/product'}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Product
            </Link>
          </Typography>
          {auth.user ? (
            <>
              <Avatar
                sx={{ ml: '75rem' }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <Button
                variant="text"
                color="inherit"
                sx={{ ml: 2, width: '100px' }}
                onClick={handleLogout}
              >
                Log out
              </Button>
            </>
          ) : (
            <Button variant="text" color="inherit" sx={{ ml: '75rem' }}>
              <Link
                to={'/login'}
                color="inherit"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  });

  const isAuthenticated = useMemo(() => status === 'authenticated', [status]);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password });
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              //
              label="Correo"
              type="email"
              name="email"
              placeholder="correo@google.com"
              fullWidth
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              //
              label="Contraseña"
              name="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                //
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticated}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                //
                type="button"
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticated}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
